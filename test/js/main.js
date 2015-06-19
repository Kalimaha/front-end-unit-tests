require.config({
    baseUrl: '../src',
    paths: {
        'jasmine': ['../test/js/libs/jasmine'],
        'jasmine-html': ['../test/js/libs/jasmine-html'],
        'jasmine-boot': ['../test/js/libs/boot']
    },
    shim: {
        'jasmine-html': {
            deps: ['jasmine']
        },
        'jasmine-boot': {
            deps: ['jasmine', 'jasmine-html']
        }
    }
});

require(['jasmine-boot'], function () {
    require(['../test/js/spec/HelloWorldSpec'], function () {
        window.onload();
    })
});