'use strict';

var _require = require('electron'),
    remote = _require.remote;

var Menu = remote.Menu,
    MenuItem = remote.MenuItem;


var content = document.querySelector('.content');
var btnToggle = document.querySelectorAll('.btn-toggle');

function btnTogglefun(e) {
    e.preventDefault();
    if (this.getAttribute('aria-expanded') === 'true') {
        content.classList.remove(this.dataset.target);
        this.setAttribute('aria-expanded', 'false');
    } else {
        content.classList.add(this.dataset.target);
        this.setAttribute('aria-expanded', 'true');
    }
}
Array.prototype.forEach.call(btnToggle, function (btn) {
    btn.addEventListener('click', btnTogglefun);
});
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
