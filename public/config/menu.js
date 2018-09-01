'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _electron = require('electron');

var _URLFile = require('./URLFile');

var _URLFile2 = _interopRequireDefault(_URLFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var minwin;
var add = {
    label: 'add',
    click: function click() {
        if (minwin) {
            minwin.close();
            minwin = null;
        }
        minwin = new _electron.BrowserWindow({ width: 500, height: 500 });
        minwin.loadURL((0, _URLFile2.default)('index.html'));
        minwin.setMenu(null);
        minwin.on('closed', function () {
            minwin = null;
        });
    }
};
var menu = {
    label: 'Menu',
    submenu: [{ role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'pasteandmatchstyle' }, { role: 'delete' }, { role: 'selectall' }, { type: 'separator' }, { role: 'quit' }]
};
var template = _electron.Menu.buildFromTemplate([add, menu]);
_electron.Menu.setApplicationMenu(template);
exports.default = template;
//# sourceMappingURL=../maps/config/menu.js.map
