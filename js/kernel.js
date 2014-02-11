requirejs.config({
    paths: {
        backbone: "../bower_components/backbone/backbone",
        jquery: "../bower_components/jquery/jquery",
        underscore: "../bower_components/underscore/underscore",
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
	}
});


require(["backbone"], function(Backbone){console.log(Backbone)});
