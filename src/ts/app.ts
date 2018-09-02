import { app, BrowserWindow } from 'electron';
import shortCut from './config/globalShortcut';
import URLFile from './config/URLFile';
import './config/menu';

let minwin:null | BrowserWindow;

function createWindow(): void
{
	let preload = new BrowserWindow({ width: 500, height: 500, frame: false, transparent: true, center: true });
	preload.loadURL(URLFile('preload.html'))
	minwin = new BrowserWindow({ width: 1000, height: 500,center:true});
	minwin.hide();
	minwin.loadURL(URLFile('index.html'));
	//closed event
	minwin.on('closed', () => {
		minwin = null;
	})
	minwin.on('show', () => {
		preload.close();
		preload.destroy();
	})
	shortCut();
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