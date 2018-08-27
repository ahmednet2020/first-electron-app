const electron = require('electron');
const remote = electron.remote;

const btnClose = document.querySelector('#btnclose');

btnClose.addEventListener('click', () => {
	console.log(remote);
	const wind = remote.getCurrentWindow();
	wind.close();
})

