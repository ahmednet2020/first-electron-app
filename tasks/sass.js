const sass = require('node-sass');
module.exports = {
    options: {
        implementation: sass,
        sourceMap: true
        //outputStyle:"compressed"
    },
    dist: {
        files: {
            './app/css/index.css': './src/sass/index.scss'
        }
    }
}