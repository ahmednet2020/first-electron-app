import { remote } from 'electron';
const { Menu, MenuItem, BrowserWindow } = remote;

const content:any = document.querySelector('.content');
const btnToggle: any = document.querySelectorAll('.btn-toggle');
document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(()=> {
        let win = remote.getCurrentWindow();
        win.show();
    }, 5000)
});
function btnTogglefun(e:any):void {
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
Array.prototype.forEach.call(btnToggle, (btn:any):void => {
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
