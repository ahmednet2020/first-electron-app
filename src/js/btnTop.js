// start remote
const { remote } = require('electron');

const btnBar = document.querySelector('.top-bar');
const btnTop = document.querySelectorAll('.btn-top');
let down = false;
let x = 0;
let y = 0;
let leave = (e) => {
	e.preventDefault();
	down = false;
	x=0;
	y=0;
};
btnBar.addEventListener('mousedown', function (e) {
	e.preventDefault();
	down = true;
	x = e.pageX;
	y = e.pageY; 
})
btnBar.addEventListener('mouseup', leave);
btnBar.addEventListener('mouseover', leave);
btnBar.addEventListener('mouseout', leave);

btnBar.addEventListener('mousemove', function (e) {
	e.preventDefault();
	if(!down) return;
	const win = remote.getCurrentWindow();
	let X = Number(win.getPosition()[0] + (e.pageX - x));
	let Y = Number(win.getPosition()[1] + (e.pageY - y));
	win.setPosition(X, Y);
})
Array.prototype.forEach.call(btnTop, ele => {
	ele.addEventListener('click', function (e) {
		const win = remote.getCurrentWindow();
		e.preventDefault();
		if(this.getAttribute('aria-label') === 'close')
		{
			win.close();
			return
		}
		if(this.getAttribute('aria-label') === 'maximize')
		{
			win.maximize();
			this.setAttribute('aria-label', 'unmaximize');
			return;
		}
		if(this.getAttribute('aria-label') === 'unmaximize')
		{
			win.unmaximize();
			this.setAttribute('aria-label', 'maximize');
			return;
		}
		if(this.getAttribute('aria-label') === 'minmize')
		{
			win.minimize();
			return;
		}
	})
})