'use strict';

var _require = require('electron'),
    remote = _require.remote;

var Menu = remote.Menu,
    MenuItem = remote.MenuItem;

//start menu item

var menu = new Menu();
var refresh = {
	label: 'Refresh',
	click: function click() {
		window.location.reload();
	}
};
menu.append(new MenuItem(refresh));
window.addEventListener('contextmenu', function (e) {
	e.preventDefault();
	menu.popup({ window: remote.getCurrentWindow() });
}, false);

//end menu item
//# sourceMappingURL=maps/index.js.map
