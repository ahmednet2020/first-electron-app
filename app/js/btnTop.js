'use strict';

// start remote
var _require = require('electron'),
    remote = _require.remote;

// function btn bar


function btnBar(ele) {
	this.btn = document.querySelector(ele);
	this.down = false;
	this.x = 0;
	this.y = 0;
}
btnBar.prototype.mouseLeave = function (e) {
	e.preventDefault();
	this.down = false;
	this.x = 0;
	this.y = 0;
};

btnBar.prototype.mouseDown = function (e) {
	e.preventDefault();
	this.down = true;
	this.x = e.pageX;
	this.y = e.pageY;
};

btnBar.prototype.mouseMove = function (e) {
	e.preventDefault();
	if (!this.down) return;
	var win = remote.getCurrentWindow();
	var X = Number(win.getPosition()[0] + (e.pageX - this.x));
	var Y = Number(win.getPosition()[1] + (e.pageY - this.y));
	win.setPosition(X, Y);
};

//function btn clicked
function btnTopfun(ele) {
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
}
var btnBarObj = new btnBar('.top-bar');
btnBarObj.btn.addEventListener('mouseup', btnBarObj.mouseLeave);
btnBarObj.btn.addEventListener('mouseover', btnBarObj.mouseLeave);
btnBarObj.btn.addEventListener('mouseout', btnBarObj.mouseLeave);
btnBarObj.btn.addEventListener('mousedown', btnBarObj.mouseDown);
btnBarObj.btn.addEventListener('mousemove', btnBarObj.mouseMove);
Array.prototype.forEach.call(document.querySelectorAll('.btn-top'), btnTopfun);
//# sourceMappingURL=maps/btnTop.js.map