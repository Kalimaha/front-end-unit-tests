define(['backbone'], function (Backbone) {
    var todo = Backbone.Model.extend({
        defaluts: {
            title: "Hallo"
        }
    });
    return todo;
});