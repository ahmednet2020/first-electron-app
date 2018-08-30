const {Menu} = require('electron');
const path = require('path');
const addWindow = require('./mainWindow');
let addWin;
let add = {
    label: 'add',
    click() {
        if(addWin)
        {
            addWin.close();
            addWin = null;
        }
        addWin = new addWindow();
        addWin.addFile('public/index.html');
        addWin.setMenu(null);
        addWin.on('closed', () => {
            addWin.destroy();
            addWin = null;
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
module.exports = template;