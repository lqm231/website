define([],
function() {
    var defaultRouters = [
        { route: "", moduleId: "viewmodels/home", nav: true },
        { route: "window", moduleId: "viewmodels/window", nav: true },
        { route: "ubuntu", moduleId: "viewmodels/ubuntu", nav: true },
        { route: "about", moduleId: "viewmodels/about", nav: true },
    ];
    return {
        defaultRouters: defaultRouters
    }
});
