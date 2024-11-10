const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  enviarMensaje: (mensaje) => ipcRenderer.send('mensaje', mensaje),
  recibirMensaje: (callback) => ipcRenderer.on('respuesta', callback)
});
