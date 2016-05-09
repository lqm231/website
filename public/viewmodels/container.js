define([
    "plugins/router"
], function (
    router
) {
    return function() {
        var me = this;
        me.router = router;
    };
});
