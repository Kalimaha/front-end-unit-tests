define([], function () {

    'use strict';

    function HALLO() {

    }

    HALLO.prototype.helloWorld = function() {
        return 'Hello World!';
    };

    return HALLO;

});