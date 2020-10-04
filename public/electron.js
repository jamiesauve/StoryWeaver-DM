const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;
// const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const path = require('path');
const isDev = require('electron-is-dev');

process.env['APP_PATH'] = app.getAppPath();
const directory = isDev ? process.cwd() : process.env.APP_PATH;

console.log('APP_PATH:', app.getAppPath());
console.log('DB PATH:', path.join(directory, './pseudoServer/api/controller/routes'))
const databaseApi = require(path.join(directory, './pseudoServer/api/controller/routes'))
ipcMain.handle('dbRequest', async (event, request) => {
  const response = await databaseApi(request)
  return response
})

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      allowRunningInsecureContent: true,
      nodeIntegration: false,
      webSecurity: false,

      /**
       * import native Node modules explicitly in this file; something about Create-React-App and webpack mess
       * with Electron's ability to provide these directly.
       * See the comment by HemalR here: https://github.com/electron/electron/issues/9920
       */
      preload: __dirname + '/preload.js'
    },
  });
  mainWindow.maximize();
  setTimeout(
    () => {
      console.log('fileName', `file:///${__dirname}/public/index.html`)
      mainWindow.loadURL(isDev ? 'http://localhost:4203' : `file:///${__dirname}/public/index.html`)
    },
    10000
  )
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();

    // installExtension(REACT_DEVELOPER_TOOLS)
    // .then((name) => console.log(`Added Extension:  ${name}`))
    // .catch((err) => console.log('An error occurred: ', err));
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