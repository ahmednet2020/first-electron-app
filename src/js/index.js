const { remote } = require('electron');
const {Menu, MenuItem} = remote;

const content = document.querySelector('.content');
const btnToggle = document.querySelectorAll('.btn-toggle');

function btnTogglefun(e) {
    e.preventDefault();
    if(this.getAttribute('aria-expanded') === 'true')
    {
        content.classList.remove(this.dataset.target);
        this.setAttribute('aria-expanded','false');
    } else {
        content.classList.add(this.dataset.target);
        this.setAttribute('aria-expanded','true');
    }
}
Array.prototype.forEach.call(btnToggle, (btn) => {
    btn.addEventListener('click', btnTogglefun );
});
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
