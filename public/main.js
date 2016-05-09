requirejs.config({
    paths: {
        "text": "lib/requirejs-text/text",
        "durandal":"lib/Durandal/js",
        "plugins" : "lib/Durandal/js/plugins",
        "transitions" : "lib/Durandal/js/transitions",
        "knockout": "lib/knockout.js/knockout",
        "bootstrap": "lib/bootstrap/dist/js/bootstrap.min",
        "jquery": "lib/jquery/dist/jquery.min",
        "underscore" : "lib/underscore/underscore-min",
        "metisMenu": "lib/metisMenu/dist/metisMenu.min",
        "raphael": "lib/raphael/raphael.min",
        "morris": "lib/morrisjs/morris.min.js"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "jQuery"
        },
       "underscore" : {
            "exports" : "_"
        },
        "metisMenu": {
            deps: ["jquery", "bootstrap"],
            exports: "jQuery"
        },
        "morris": {
            deps: [ "jquery", "raphael" ],
            exports: "jQuery"
        }
    }
});

define(["durandal/system",
    "durandal/app",
    "durandal/viewLocator",
    "plugins/router",
    "routers/router"
],  function (
    system,
    app,
    viewLocator,
    router,
    routerMapping
) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = "LQMinh";

    app.configurePlugins({
        router:true,
        dialog: true
    });

    app.start().then(function() {
        //Replace "viewmodels" in the moduleId with "views" to locate the view.
        //Look for partial views in a "views" folder in the root.
        viewLocator.useConvention();

        router.map(routerMapping.defaultRouters).
            buildNavigationModel().
            activate();

        app.setRoot("viewmodels/container", "entrance");
    });
});
