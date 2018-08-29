'use strict';

// start remote
var _require = require('electron'),
    remote = _require.remote;

var btnBar = document.querySelector('.top-bar');
var btnTop = document.querySelectorAll('.btn-top');
var down = false;
var x = 0;
var y = 0;
var leave = function leave(e) {
	e.preventDefault();
	down = false;
	x = 0;
	y = 0;
};
btnBar.addEventListener('mousedown', function (e) {
	e.preventDefault();
	down = true;
	x = e.pageX;
	y = e.pageY;
});
btnBar.addEventListener('mouseup', leave);
btnBar.addEventListener('mouseover', leave);
btnBar.addEventListener('mouseout', leave);

btnBar.addEventListener('mousemove', function (e) {
	e.preventDefault();
	if (!down) return;
	var win = remote.getCurrentWindow();
	var X = Number(win.getPosition()[0] + (e.pageX - x));
	var Y = Number(win.getPosition()[1] + (e.pageY - y));
	win.setPosition(X, Y);
});
Array.prototype.forEach.call(btnTop, function (ele) {
	ele.addEventListener('click', function (e) {
		var win = remote.getCurrentWindow();
		e.preventDefault();
		if (this.getAttribute('aria-label') === 'close') {
			win.close();
			return;
		}
		if (this.getAttribute('aria-label') === 'maximize') {
			win.maximize();
			this.setAttribute('aria-label', 'unmaximize');
			return;
		}
		if (this.getAttribute('aria-label') === 'unmaximize') {
			win.unmaximize();
			this.setAttribute('aria-label', 'maximize');
			return;
		}
		if (this.getAttribute('aria-label') === 'minmize') {
			win.minimize();
			return;
		}
	});
});
