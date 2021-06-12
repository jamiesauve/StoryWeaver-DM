const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const isDev = require('electron-is-dev');

process.env['APP_PATH'] = app.getAppPath();

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
    },
  });
  mainWindow.maximize();
  mainWindow.loadURL(isDev ? 'http://localhost:4203' : `file:///${__dirname}/public/index.html`)
  
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