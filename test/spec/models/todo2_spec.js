define(['models/todo2'], function (Todo) {
    describe("Todo Model", function () {
        it("should have a default empty string title", function () {
            var t = new Todo();
            jasmine.log(t);
            expect(t !=  undefined);
        })
    });
});