define(['HelloWorld'], function (HelloWorld) {

    describe("HelloWorld", function () {

        describe("sayHello", function () {
            it("should say Hello", function () {
                expect(HelloWorld.helloWorld()).toEqual("Hello World!");
            })
        })

    })

});