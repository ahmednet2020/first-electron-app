const { BrowserWindow}  = require('electron');
const url = require('url');
const path = require('path');

class addWindow extends BrowserWindow
{
	constructor()
	{
		super({width:200, height: 500});
	}
	addFile(file)
	{
		let pathFile = url.format({
			protocol:'file:',
			pathname:path.join(__dirname, '../../../',`${file}`),
			slashes:true
		});
		this.loadURL(pathFile);
		this.setMenu(null);
		return this;
	}
}

module.exports = addWindow