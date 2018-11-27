var Mobile = /** @class */ (function () {
    function Mobile(model) {
        this.brand = 'samsung';
        console.log(model);
        this.model = model;
    }
    Mobile.prototype.run = function () {
        console.log('test');
    };
    return Mobile;
}());
var samsung = new Mobile('note9');
samsung.run();
