require.config({
  "baseUrl" : "/content",
  "paths"   : {
    "jquery"     : "lib/jquery/dist/jquery.min",
    "underscore" : "lib/underscore/underscore-min",
    "backbone"   : "lib/components-backbone/backbone-min",
    "react"      : "lib/react/react.min"
  },
  "shim" : {
    "backbone" : {
      "deps" : [
        "jquery",
        "underscore"
      ],
      "exports" : "Backbone"
    },
    "jquery" : {
      "exports" : "$"
    },
    "underscore" : {
      "exports" : "_"
    }
  }
});

require(["backbone", "router"], function(Backbone, Router) {
    new Router();
    Backbone.history.start();
});
