const { BrowserWindow, globalShortcut }  = require('electron');

function shortCut () {
	globalShortcut.register('CommandOrControl+d', () => {
		let focusWindow = BrowserWindow.getFocusedWindow();
		focusWindow.webContents.toggleDevTools()
	})
}


module.exports = shortCut;