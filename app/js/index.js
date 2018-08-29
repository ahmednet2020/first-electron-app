'use strict';

var _require = require('electron'),
    remote = _require.remote;

var Menu = remote.Menu,
    MenuItem = remote.MenuItem;


var btnClose = document.querySelector('#btnclose');
var menu = new Menu();

menu.append(new MenuItem({
	label: 'Refresh',
	click: function click() {
		window.location.reload();
	}
}));
btnClose.addEventListener('click', function () {
	var wind = remote.getCurrentWindow();
	wind.close();
});
window.addEventListener('contextmenu', function (e) {
	e.preventDefault();
	menu.popup({ window: remote.getCurrentWindow() });
}, false);
