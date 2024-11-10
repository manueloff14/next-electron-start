const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

// Importación dinámica de electron-serve
let serve;
(async () => {
  serve = (await import('electron-serve')).default;
})();

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, // Seguridad
      contextIsolation: true  // Seguridad
    }
  });

  if (app.isPackaged) {
    // En producción, sirve los archivos estáticos
    const loadURL = serve({ directory: 'out' });
    await loadURL(mainWindow); // Esperamos a que los archivos se carguen
  } else {
    // En desarrollo, carga desde localhost
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// Eventos de Electron
app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

// Ejemplo de manejo de IPC
ipcMain.on('mensaje', (event, arg) => {
  console.log(arg); // Imprime el mensaje recibido
});
