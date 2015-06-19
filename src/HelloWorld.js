define(['jquery'], function ($) {

    'use strict';

    function HALLO() {

    }

    HALLO.prototype.helloWorld = function() {
        return 'Hello World!';
    };

    HALLO.prototype.invokeWDS = function(config) {
        var _this = this;
        $.ajax({
            url: 'http://faostat3.fao.org/wds/rest/groupsanddomains/faostat/E',
            type: 'GET',
            success: config.success,
            error: function(e) {
                console.log(e);
            }
        });
    };

    HALLO.prototype.get_version = function(response) {
        return $.fn.jquery;
    };

    return HALLO;

});