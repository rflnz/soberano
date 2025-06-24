// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false, // Permitir 'require' no renderer
      nodeIntegration: true    // Permitir Node.js no HTML
    }
    });

  // Abre o HTML principal (ex: login)
win.loadFile('src/pages/public/login.html');
}
const mainWindow = new BrowserWindow({
  width: 1200,
  height: 800,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
    devTools: true
  }
});
app.whenReady().then(createWindow);
