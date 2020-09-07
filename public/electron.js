const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const path = require('path');
const isDev = require('electron-is-dev');

const databaseApi = require('../pesudoServer/api/controller/routes')

ipcMain.on('dbRequest', async (event, request) => {
  console.log('IN MAIN, MESSAGE RECEIVED:', request)
  const response = await databaseApi(request)
  event.reply('dbResponse', response)
})

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      /**
       * import native Node modules explicitly in this file; something about Create-React-App and webpack mess
       * with Electron's ability to provide these directly.
       * See the comment by HemalR here: https://github.com/electron/electron/issues/9920
       */
      preload: __dirname + '/preload.js'
    },
  });
  mainWindow.maximize();
  mainWindow.loadURL(isDev ? 'http://localhost:4203' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();

    installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});