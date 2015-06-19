define(['HelloWorld'], function (HelloWorld) {

    var hallo = new HelloWorld();

    describe("HelloWorld", function () {

        describe("sayHello", function () {
            it("should say Hello", function () {
                expect(hallo.helloWorld()).toEqual("Hello World!");
            })
        })

    })

});