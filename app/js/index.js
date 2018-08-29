'use strict';

var _require = require('electron'),
    remote = _require.remote;

var Menu = remote.Menu,
    MenuItem = remote.MenuItem;


var menu = new Menu();
menu.append(new MenuItem({
	label: 'Refresh',
	click: function click() {
		window.location.reload();
	}
}));
window.addEventListener('contextmenu', function (e) {
	e.preventDefault();
	menu.popup({ window: remote.getCurrentWindow() });
}, false);
