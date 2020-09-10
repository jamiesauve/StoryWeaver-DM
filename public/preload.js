window.ipcRenderer = require('electron').ipcRenderer

const callDatabase = async (route, body) => {
  const result = await ipcRenderer.invoke('dbRequest', { route, body })
  return result
}

window.callDatabase = callDatabase