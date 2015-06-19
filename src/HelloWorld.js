define(['jquery'], function ($) {

    'use strict';

    function HALLO() {
        console.log($.fn.jquery);
    }

    HALLO.prototype.helloWorld = function() {
        return 'Hello World!';
    };

    HALLO.prototype.invokeWDS = function() {
        $.ajax({
            url: 'http://faostat3.fao.org/wds/rest/groupsanddomains/faostat/E',
            type: 'GET',
            success: function(response) {
                console.log(response);
            },
            error: function(e) {
                console.log(e);
            }
        });
    };

    return HALLO;

});