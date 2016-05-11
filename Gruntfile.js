module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
	    src: {
			lib: "lib",
			less: "less",
			css: "public/css"
		},
		usebanner: {
		    dist: {
				options: {
					position: "replace",
					banner: "/* lqminh */",
					linebreak: true,
					replace: true
				},
				files: {
					src: [ "index.js" ]
				}
		    }
		},
		less: {
            styles: {
                options: {
                    paths: [ "<%= src.less %>" ],
                    compress: false
                },
                files: {
                    "<%= src.css %>/main.css": "<%= src.less %>/main.less"
                }
            }
        }
	});

	grunt.loadNpmTasks("grunt-banner");
	grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");

	// grunt.registerTask("addbanner", [ "usebanner" ]);
	grunt.registerTask("css", [ "less" ]);
};
