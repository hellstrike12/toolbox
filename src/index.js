const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const isMac = process.platform === "darwin";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (isMac === false) {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// Menu
const template = [
  {
    label: "Arquivo",
    submenu: [
      { label: 'Novo Registro', accelerator: 'Ctrl + N' },
      { label: 'Nova Coleção', accelerator: 'Ctrl + Shift + N' },
      { type: 'separator' },
      { label: 'Abrir Registro', accelerator: 'Ctrl + O' },
      { label: 'Abrir Coleção', accelerator: 'Ctrl + Shift + O' },
      { type: 'separator' },
      { label: 'Salvar Registro', accelerator: 'Ctrl + S' },
      { label: 'Salvar Coleção', accelerator: 'Ctrl + S' },
      { type: 'separator' },
      { label: 'Sair', role: 'quit' }
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
