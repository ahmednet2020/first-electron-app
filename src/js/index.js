const { remote } = require('electron');
const {Menu, MenuItem} = remote;

//start menu item
const menu = new Menu();
let refresh = {
	label: 'Refresh',
	click() {
		window.location.reload();
	}
};
menu.append(new MenuItem(refresh))
window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    menu.popup({window: remote.getCurrentWindow()})
  }, false)

//end menu item
