const { app } = require('electron');
const globalShortcut = require('./src/config/globalShortcut');
//UI compponets
const mainWindow = require('./src/js/ui-components/mainWindow');

let minwin;

function createWindow()
{
	globalShortcut();
	minwin = new mainWindow();
	minwin.addFile('./app/index.html');
	//closed event
	minwin.on('closed', () => {
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