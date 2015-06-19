define(['hello-world'], function (HelloWorld) {

    var hallo = new HelloWorld();

    describe("Module HelloWorld", function () {

        describe("has a method", function () {
            it("that should say Hello", function () {
                expect(hallo.helloWorld()).toEqual("Hello World!");
            })
        });

        describe("and another", function () {
            it("that return the JQuery version ", function() {
                expect(hallo.get_version()).toEqual("2.1.4");
            });
        });

    });

});