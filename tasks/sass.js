const sass = require('node-sass');
module.exports = {
    options: {
        implementation: sass,
        sourceMap: true
        //outputStyle:"compressed"
    },
    dist: {
        data: {
            './app/css/index.css': './src/sass/index.scss'
        }
    }
}