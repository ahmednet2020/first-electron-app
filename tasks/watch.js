module.exports = {
	css:{
		files: './src/sass/**/*',
	    tasks: ['sass', 'postcss'],
	    options: {
	      debounceDelay: 250,
	    },
	},
	pug:{
		files: './src/pug/**/*.pug',
	    tasks: ['pug'],
	    options: {
	      debounceDelay: 250,
	    },
	},
}