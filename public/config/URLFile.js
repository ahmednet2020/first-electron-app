'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _url = require('url');

var url = _interopRequireWildcard(_url);

var _path = require('path');

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addFile(file) {
    var pathFile = url.format({
        protocol: 'file:',
        pathname: path.join(__dirname, '../', "" + file),
        slashes: true
    });
    return pathFile;
}
exports.default = addFile;