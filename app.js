const { app } = require('electron');
const globalShortcut = require('./src/config/globalShortcut');
//UI compponets
const mainWindow = require('./src/ui-components/mainWindow');
app.on('ready', () => {
	globalShortcut();
	mainWindow();
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	app.quit();
	if (process.platform !== 'darwin') {
		app.quit();
	}
})

app.on('activate', () => {
	app.quit();
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.