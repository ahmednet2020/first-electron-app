'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _electron = require('electron');

function shortCut() {
    _electron.globalShortcut.register('CommandOrControl+d', function () {
        var win = _electron.BrowserWindow.getFocusedWindow();
        win.webContents.toggleDevTools();
    });
}
exports.default = shortCut;