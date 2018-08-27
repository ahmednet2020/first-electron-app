const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');
let win;
function createWindow () {
	let file = url.format({
		protocol:'file:',
		pathname:path.join(__dirname, './index.html'),
		slashes:true
	});
	win = new BrowserWindow({width:1000, height: 500});

	//win.loadFile('./index.html');
	win.loadURL(file);

	win.openDevTools();

	win.on('closed', () => {
	  win = null
	})
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	app.quit();
	if (process.platform !== 'darwin') {
		app.quit();
	}
})

app.on('activate', () => {
	if (win === null) {
	  createWindow()
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.