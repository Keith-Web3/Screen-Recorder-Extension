chrome.action.onClicked.addListener(tab => {
  console.log('works')
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['contentScript.js'],
  })
})
