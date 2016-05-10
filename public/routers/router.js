define([],
function() {
    var defaultRouters = [
        { route: "", moduleId: "viewmodels/home", nav: true },
        { route: "window", moduleId: "viewmodels/window", nav: true }
    ];
    return {
        defaultRouters: defaultRouters
    }
});
