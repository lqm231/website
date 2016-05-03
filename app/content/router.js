define(["backbone"], function(Backbone) {
    return Backbone.Router.extend({
        routes : {
            "" : "index",
            "show": "show"
        },
        index : function() {
            console.log("hello world");
        },
        show: function() {
            console.log("show");
        }
    });
});