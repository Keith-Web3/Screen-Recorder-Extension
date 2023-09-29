import { motion } from 'framer-motion'
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from 'react'

console.log('hello world')

const stop = chrome.runtime.getURL('stop.svg')
const pause = chrome.runtime.getURL('pause.svg')
const microphone = chrome.runtime.getURL('microphone.svg')
const camera = chrome.runtime.getURL('video-camera.svg')
const trash = chrome.runtime.getURL('trash.svg')
let recordOptions

const ContentScript = function () {
  const [isRecording, setIsRecording] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  async function startCapture(displayMediaOptions: DisplayMediaStreamOptions) {
    let captureStream = null

    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      )
      const data = []
      const mediaRecorder = new MediaRecorder(captureStream)
      mediaRecorder.ondataavailable = function (e) {
        data.push(e.data)
      }
      mediaRecorder.start()

      mediaRecorder.onstop = function (e) {
        videoRef.current.src = URL.createObjectURL(
          new Blob(data, {
            type: data[0].type,
          })
        )
        setIsRecording(false)
      }
    } catch (err) {
      console.error(`Error: ${err}`)
      setIsRecording(false)
    }
    return captureStream
  }

  const popupListener = function (
    request: {
      message: {
        isAudioEnabled: boolean
        isVideoEnabled: boolean
        recordOption: 'window' | 'monitor' | 'browser'
      }
    },
    _sender: chrome.runtime.MessageSender,
    _sendResponse: (response?: any) => void
  ) {
    recordOptions = {
      video: request.message.isVideoEnabled && {
        displaySurface: request.message.recordOption,
      },
      audio: request.message.isAudioEnabled && {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
        suppressLocalAudioPlayback: true,
      },
      surfaceSwitching: 'include',
      selfBrowserSurface: 'exclude',
      systemAudio: 'include',
    }
    setIsRecording(true)
    console.log('Message received in content script:', request.message)
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener(popupListener)

    return () => chrome.runtime.onMessage.removeListener(popupListener)
  }, [])
  useEffect(() => {
    if (!isRecording) return
    ;(async () => {
      console.log(recordOptions)
      const stream = await startCapture(recordOptions)

      console.log(stream)
    })()
  }, [isRecording])
  return isRecording ? (
    <>
      <video className="fixed top-0 left-0" controls ref={videoRef} />
      <motion.div
        draggable
        className="flex items-center gap-6 fixed bottom-0 left-0 z-[9999]"
      >
        <div className=" w-36 h-36 rounded-full bg-white"></div>
        <div className="flex items-center bg-[#141414] gap-8 py-4 px-10 h-max rounded-full border-[#BEBEBE] border-[10px]">
          <time>00:00:00</time>
          <div className=" w-3 h-3 shadow-[0px_0px_4px_4px_#c0040430] bg-[#C00404] rounded-full"></div>
          <div className="h-[69px] w-[1px] bg-[#E8E8E8]"></div>
          <Control img={pause} name="pause" />
          <Control img={stop} name="stop" />
          <Control img={camera} name="camera" />
          <Control img={microphone} name="mic" />
          <Control
            onClick={() => setIsRecording(false)}
            isGray
            img={trash}
            name=""
          />
        </div>
      </motion.div>
    </>
  ) : (
    <></>
  )
}

const Control = function ({
  img,
  name,
  isGray = false,
  ...props
}: {
  img: string
  name: string
  isGray?: boolean
} & ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="cursor-pointer font-work" {...props}>
      <div
        className={`p-2 aspect-square w-11 rounded-full ${
          isGray ? 'bg-[#4B4B4B]' : 'bg-white'
        } cursor-pointer mx-auto grid place-content-center`}
      >
        <img
          className={`${
            name === 'pause' ? 'w-5' : 'w-8'
          } aspect-square object-contain`}
          src={img}
          alt={name}
        />
      </div>
      <p className="text-white font-medium mt-1 capitalize text-center min-h-[1rem]">
        {name}
      </p>
    </div>
  )
}

export default ContentScript
