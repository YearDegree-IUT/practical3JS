module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 1337,
					keepalive: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
};
