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
const play = chrome.runtime.getURL('play.svg')
const cameraDisabled = chrome.runtime.getURL('video-slash.svg')
const microphone = chrome.runtime.getURL('microphone.svg')
const camera = chrome.runtime.getURL('video-camera.svg')
const trash = chrome.runtime.getURL('trash.svg')
let recordOptions
let recordInterval: NodeJS.Timeout
let mediaRecorder: MediaRecorder | null
let userStream: MediaStream = null

const ContentScript = function () {
  const [isRecording, setIsRecording] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [recordTime, setRecordTime] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isCameraEnabled, setIsCameraEnabled] = useState(false)

  async function toggleCamera() {
    if (userStream) {
      // If a stream exists, stop it
      const tracks = userStream.getTracks()
      tracks.forEach(track => {
        track.stop()
      })
      userStream = null
      setIsCameraEnabled(false)
    } else {
      // If no stream exists, request a new one
      userStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 1280,
          height: 720,
        },
      })
      videoRef.current.srcObject = userStream
      setIsCameraEnabled(true)
    }
  }

  const startCapture = async function ({
    displayMediaOptions,
    isUserStreamEnabled,
  }: {
    displayMediaOptions: DisplayMediaStreamOptions
    isUserStreamEnabled: boolean
  }) {
    let captureStream: MediaStream = null

    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      )
      if (isUserStreamEnabled) {
        userStream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            width: 1280,
            height: 720,
          },
        })
        videoRef.current.srcObject = userStream
        setIsCameraEnabled(true)
      }

      const data = []
      mediaRecorder = new MediaRecorder(captureStream)

      mediaRecorder.ondataavailable = function (e) {
        data.push(e.data)
      }
      mediaRecorder.onstart = function () {
        setRecordTime(0)
        recordInterval = setInterval(() => {
          setRecordTime(prev => prev + 1)
        }, 1000)
      }
      mediaRecorder.onresume = function () {
        setIsPaused(false)
        recordInterval = setInterval(() => {
          setRecordTime(prev => prev + 1)
        }, 1000)
      }
      mediaRecorder.onpause = function () {
        clearInterval(recordInterval)
        setIsPaused(true)
      }
      mediaRecorder.start()

      mediaRecorder.onstop = async function (e) {
        const tracks = captureStream.getTracks()
        tracks.forEach(track => {
          track.stop()
        })
        captureStream = null
        if (userStream) {
          const userTracks = userStream.getTracks()
          userTracks.forEach(track => {
            track.stop()
          })
          userStream = null
        }
        console.log(
          URL.createObjectURL(
            new Blob(data, {
              type: 'video/mp4',
            })
          )
        )

        const blobData = new Blob(data, {
          type: 'video/mp4',
        })
        const formData = new FormData()

        formData.append(
          'video',
          blobData,
          `random${+Math.random().toFixed(2) * 1000}.mp4`
        )
        console.log(formData)
        try {
          const res = await fetch(
            'https://mediaupload-uk0g.onrender.com/video/upload',
            {
              method: 'POST',
              mode: 'no-cors',
              body: formData,
            }
          )
          const { url } = await res.json()
          console.log(url)
        } catch (err) {
          console.log(err)
        }

        clearInterval(recordInterval)
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
      displayMediaOptions: {
        video: {
          displaySurface: request.message.recordOption,
        },
        audio: request.message.isAudioEnabled && {
          echoCancellation: false,
          noiseSuppression: false,
          sampleRate: 22050,
          suppressLocalAudioPlayback: false,
        },
        surfaceSwitching: 'include',
        selfBrowserSurface: 'exclude',
        systemAudio: 'include',
      },
      isUserStreamEnabled: request.message.isVideoEnabled,
    }

    setIsRecording(true)
    setIsCameraEnabled(request.message.isVideoEnabled)
    console.log('Message received in content script:', request.message)
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener(popupListener)

    return () => chrome.runtime.onMessage.removeListener(popupListener)
  }, [])
  useEffect(() => {
    if (!isRecording) {
      setIsCameraEnabled(false)
      return
    }
    ;(async () => {
      const stream = await startCapture(recordOptions)

      console.log(stream)
    })()
  }, [isRecording])
  return isRecording ? (
    <motion.div
      draggable
      className="flex items-center gap-6 fixed bottom-0 left-0 z-[9999]"
    >
      <video
        autoPlay
        playsInline
        ref={videoRef}
        className=" w-36 h-36 rounded-full bg-black object-cover scale-x-[-1]"
      />
      <div className="flex items-center bg-[#141414] gap-8 py-4 px-10 h-max rounded-full border-[#BEBEBE] border-[10px]">
        <time>{secondsToHMS(recordTime)}</time>
        <div className=" w-3 h-3 shadow-[0px_0px_4px_4px_#c0040430] bg-[#C00404] rounded-full"></div>
        <div className="h-[69px] w-[1px] bg-[#E8E8E8]"></div>
        <Control
          onClick={() => {
            mediaRecorder[isPaused ? 'resume' : 'pause']()
          }}
          img={isPaused ? play : pause}
          name={isPaused ? 'play' : 'pause'}
        />
        <Control
          onClick={() => {
            mediaRecorder?.stop()
          }}
          img={stop}
          name="stop"
        />
        <Control
          onClick={toggleCamera}
          img={isCameraEnabled ? camera : cameraDisabled}
          name="camera"
        />
        <Control img={microphone} name="mic" />
        <Control
          onClick={() => setIsRecording(false)}
          isGray
          img={trash}
          name=""
        />
      </div>
    </motion.div>
  ) : (
    <></>
  )
}

// Extra components and helper functions
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

function secondsToHMS(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  // Add leading zeros if needed
  const formattedHours = String(hours).padStart(2, '0')
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(remainingSeconds).padStart(2, '0')

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}

export default ContentScript
