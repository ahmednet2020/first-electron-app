const { app ,BrowserWindow, globalShortcut}  = require('electron');
const url = require('url');
const path = require('path');


let mainWindow;
//menu
const menu = require('./menu');
function createWindow () {
	let file = url.format({
		protocol:'file:',
		pathname:path.join(__dirname, '../../../app/index.html'),
		slashes:true
	});
	mainWindow = new BrowserWindow({width:1000, height: 500,frame:false,transparent:true});

	//win.loadFile('./index.html');
	mainWindow.loadURL(file);
	//closed event
	mainWindow.on('closed', () => {
		mainWindow = null;
	  	app.quit();
	})
	//init menu
	mainWindow.setMenu(menu);
}

module.exports = createWindow