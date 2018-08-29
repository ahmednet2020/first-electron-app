const { remote } = require('electron');
const {Menu, MenuItem} = remote;


const menu = new Menu();
menu.append(new MenuItem({
		label: 'Refresh',
		click() {
			window.location.reload();
		}
	}))
window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    menu.popup({window: remote.getCurrentWindow()})
  }, false)

