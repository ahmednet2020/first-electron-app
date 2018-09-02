'use strict';

var _electron = require('electron');

var Menu = _electron.remote.Menu,
    MenuItem = _electron.remote.MenuItem,
    BrowserWindow = _electron.remote.BrowserWindow;
var content = document.querySelector('.content');
var btnToggle = document.querySelectorAll('.btn-toggle');
document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
        var win = _electron.remote.getCurrentWindow();
        win.show();
    }, 5000);
});
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
    menu.popup({ window: _electron.remote.getCurrentWindow() });
}, false);
//# sourceMappingURL=../maps/js/index.js.map
