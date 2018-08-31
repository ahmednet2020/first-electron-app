import { Menu , BrowserWindow } from 'electron';
import URLFile from './URLFile';

let minwin: null | BrowserWindow;
let add:{} = {
    label: 'add',
    click() {
        if (minwin)
        {
            minwin.close();
            minwin = null;
        }
        minwin = new BrowserWindow({ width: 500, height: 500 });
        minwin.loadURL(URLFile('index.html'));
        minwin.setMenu(null);
        minwin.on('closed', () => {
            minwin = null;
        })
     }
};
let  menu = {
    label: 'Menu',
    submenu: [
        {role: 'undo'},
        {role: 'redo'},
        {type: 'separator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'pasteandmatchstyle'},
        {role: 'delete'},
        {role: 'selectall'},
        {type: 'separator'},
        {role: 'quit'}
    ]
};
let template = Menu.buildFromTemplate([add, menu]);
Menu.setApplicationMenu(template);
export default template;