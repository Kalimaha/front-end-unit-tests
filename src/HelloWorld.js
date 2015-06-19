define([], function () {

    var myLibrary = (function () {

        function helloWorld() {
            return "Hello World!";
        }

        return {
            helloWorld: helloWorld
        };

    })();

    return myLibrary;

});