const { app, MenuItem } = require('electron');
const globalShortcut = require('./src/js/config/globalShortcut');
//UI compponets
const mainWindow = require('./src/js/ui-components/mainWindow');
const menu = require('./src/js/ui-components/menu');

let minwin;

function createWindow()
{
	
	globalShortcut();
	minwin = new mainWindow({width:1000, height:1000},'public/index.html');
	//closed event
	minwin.on('closed', () => {
		minwin.destroy();
		minwin = null;
	})
}
app.on('ready',createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	app.quit();
	if (process.platform !== 'darwin') {
		app.quit();
	}
})

app.on('activate', () => {
	if (minwin === null) {
      createWindow()
    }
})