const { app, BrowserWindow } = require('electron')

const path = require('node:path')



const createwin = () => {
    const win = new BrowserWindow({
        show: false,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });
    win.loadFile("web/index.html");
    win.maximize()

}

app.whenReady().then(async () => {
    await createwin()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().lenght === 0) createwin()
})