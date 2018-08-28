const { remote } = require('electron');
const {Menu, MenuItem} = remote;

const btnClose = document.querySelector('#btnclose');
const menu = new Menu();

menu.append(new MenuItem({
		label: 'hello',
		click() {
		  btnClose.textContent = 'hello world'
		}
	}))
btnClose.addEventListener('click', () => {
	const wind = remote.getCurrentWindow();
	wind.close();
})
window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    menu.popup({window: remote.getCurrentWindow()})
  }, false)

