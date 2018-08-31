const { BrowserWindow}  = require('electron');
const url = require('url');
const path = require('path');

class mainWindow extends BrowserWindow
{
	constructor(view, file)
	{
		super(view);
		this.file = this.addFile(file);
		this.loadURL(this.file);
	}
	addFile(file)
	{
		let pathFile = url.format({
			protocol:'file:',
			pathname:path.join(__dirname, '../../../',`${file}`),
			slashes:true
		});
		return pathFile;
	}
}

module.exports = mainWindow