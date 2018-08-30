const { BrowserWindow}  = require('electron');
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
		return this;
	}
}

module.exports = mainWindow