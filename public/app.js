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
    var preload = new _electron.BrowserWindow({
        width: 500,
        height: 500,
        frame: false,
        transparent: true,
        center: true
    });
    preload.loadURL((0, _URLFile2.default)('preload.html'));
    minwin = new _electron.BrowserWindow({ width: 1000, height: 500, center: true });
    minwin.hide();
    minwin.loadURL((0, _URLFile2.default)('index.html'));
    minwin.on('closed', function () {
        minwin = null;
    });
    minwin.on('show', function () {
        preload.close();
        preload.destroy();
    });
    (0, _globalShortcut2.default)();
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
//# sourceMappingURL=maps/app.js.map
