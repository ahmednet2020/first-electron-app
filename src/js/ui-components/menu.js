const {Menu} = require('electron');

const template = [{
     label: 'add',
     click() {
     }
    },{
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
    }]
const menu = Menu.buildFromTemplate(template);

module.exports = menu;