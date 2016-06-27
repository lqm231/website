define([],
function() {
    var defaultRouters = [
        { route: "", title:"Welcome", moduleId: "viewmodels/welcome", nav: true },
        { route: "flickr", moduleId: "viewmodels/flickr", nav: true }
    ];
    return {
        defaultRouters: defaultRouters
    }
});
