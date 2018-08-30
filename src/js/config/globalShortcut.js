const {BrowserWindow, globalShortcut }  = require('electron');

function shortCut () {
	globalShortcut.register('CommandOrControl+d', () => {
		let win = BrowserWindow.getFocusedWindow();
		win.webContents.toggleDevTools()
	})
}


module.exports = shortCut;