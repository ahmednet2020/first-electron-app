module.exports = {
  compile: {
    options: {
      data: {
        debug: true
      },
      pretty:true
    },
    files: {
      './app/index.html': './src/pug/index.pug',
    }
  }
}