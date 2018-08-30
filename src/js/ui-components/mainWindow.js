const { app ,BrowserWindow, globalShortcut}  = require('electron');
const menu = require('./menu');
const url = require('url');
const path = require('path');

class mainWindow extends BrowserWindow
{
	constructor()
	{
		super({width:1000, height: 500});
	}
	addFile(file)
	{
		let pathFile = url.format({
			protocol:'file:',
			pathname:path.join(__dirname, '../../../',`${file}`),
			slashes:true
		});
		this.loadURL(pathFile);
		this.setMenu(menu);
		return this;
	}
}

module.exports = mainWindow