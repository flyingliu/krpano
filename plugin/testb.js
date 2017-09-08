define(function(require) {
    var isReady = false,
        foobar;

    return (function(scope) {
        let foo = require("foo").foo();
        return {
            isReady: isReady,
            foobar: foo
        };
    })(({}))




});