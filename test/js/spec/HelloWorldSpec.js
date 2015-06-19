define(['HelloWorld'], function (HelloWorld) {

    var hallo = new HelloWorld();

    describe("HelloWorld", function () {

        describe("sayHello", function () {
            it("should say Hello", function () {
                expect(hallo.helloWorld()).toEqual("Hello World!");
            })
        });

        describe("get_version", function () {
            it("should get the JQuery version ", function() {
                expect(hallo.get_version()).toEqual("2.1.4");
            });
        });

    });

});