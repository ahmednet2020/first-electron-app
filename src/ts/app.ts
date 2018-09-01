import { app, BrowserWindow } from 'electron';
import shortCut from './config/globalShortcut';
import URLFile from './config/URLFile';
import './config/menu';

let minwin:null | BrowserWindow;

function createWindow(): void
{
	
	shortCut();
	minwin = new BrowserWindow({ width: 1000, height: 500 });
	minwin.loadURL(URLFile('index.html'));
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