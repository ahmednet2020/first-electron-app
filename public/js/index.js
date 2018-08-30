'use strict';

var _require = require('electron'),
    remote = _require.remote;

var Menu = remote.Menu,
    MenuItem = remote.MenuItem;


var body = document.querySelector('body');
var btnToggle = document.querySelector('.btn-aside');
var btnMembers = document.querySelector('.btn-members');

function btnTogglefun(e) {
    e.preventDefault();
    if (this.getAttribute('aria-expanded') === 'true') {
        body.classList.remove(this.dataset.target);
        this.setAttribute('aria-expanded', 'false');
    } else {
        body.classList.add(this.dataset.target);
        this.setAttribute('aria-expanded', 'true');
    }
}
btnToggle.addEventListener('click', btnTogglefun);
btnMembers.addEventListener('click', btnTogglefun);
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
