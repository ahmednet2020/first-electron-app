const { remote } = require('electron');
const {Menu, MenuItem} = remote;

const body = document.querySelector('body');
const btnToggle = document.querySelector('.btn-aside');
const btnMembers = document.querySelector('.btn-members');

function btnTogglefun(e) {
    e.preventDefault();
    if(this.getAttribute('aria-expanded') === 'true')
    {
        body.classList.remove(this.dataset.target);
        this.setAttribute('aria-expanded','false');
    } else {
        body.classList.add(this.dataset.target);
        this.setAttribute('aria-expanded','true');
    }
}
btnToggle.addEventListener('click',btnTogglefun);
btnMembers.addEventListener('click', btnTogglefun)
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
