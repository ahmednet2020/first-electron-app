import { BrowserWindow, globalShortcut } from 'electron';

function shortCut ():void {
	globalShortcut.register('CommandOrControl+d', () => {
		let win: BrowserWindow = BrowserWindow.getFocusedWindow();
		win.webContents.toggleDevTools()
	})
}

export default shortCut