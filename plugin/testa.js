define([
    'require'
], function(require) {
    'use strict';

    function Testa() {}

    Testa.prototype = {
        init() {
            console.log(this);
        }
    }
    return Testa;
});