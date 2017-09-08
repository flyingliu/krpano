define(function(require) {
    var testbb = require("testb")
    console.log("testbb", testbb);
    // let b = new testb().init();

    function Testa() {}

    Testa.prototype = {
        init() {
            console.log(this);
            return this
        },
        a() {
            return "a fn"
        }
    }
    return Testa;
});