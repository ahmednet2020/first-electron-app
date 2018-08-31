'use strict';

var _electron = require('electron');

var _globalShortcut = require('./config/globalShortcut');

var _globalShortcut2 = _interopRequireDefault(_globalShortcut);

var _URLFile = require('./config/URLFile');

var _URLFile2 = _interopRequireDefault(_URLFile);

require('./config/menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var minwin;
function createWindow() {
    (0, _globalShortcut2.default)();
    minwin = new _electron.BrowserWindow({ width: 500, height: 100 });
    minwin.loadURL((0, _URLFile2.default)('index.html'));
    minwin.on('closed', function () {
        minwin = null;
    });
}
_electron.app.on('ready', createWindow);
_electron.app.on('window-all-closed', function () {
    _electron.app.quit();
    if (process.platform !== 'darwin') {
        _electron.app.quit();
    }
});
_electron.app.on('activate', function () {
    if (minwin === null) {
        createWindow();
    }
});