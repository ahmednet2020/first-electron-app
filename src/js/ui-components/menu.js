const {Menu} = require('electron');
const path = require('path');
const addWindow = require('./addWindow');
let addWin;
let add = {
    label: 'add',
    click() {
        if(addWin)
        {
            addWin.destroy();
            addWin = null;
        }
        addWin = new addWindow();
        addWin.addFile('app/index.html');
        addWin.on('closed', () => {
            addWin.destroy();
            addWin = null;
        })
    }
};
let wow = {
    label: 'wow',
    click() {
        if(addWin)
        {
            addWin.destroy();
            addWin = null;
        }
        addWin = new addWindow();
        addWin.addFile('app/index.html');
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
const template = Menu.buildFromTemplate([add, wow, menu]);
module.exports = template;