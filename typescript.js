// boolean
var isCool = true;
// Number
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I am not old, I am only ".concat(age);
// array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Objects
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// Any
var whatever = 'aghhhhh noooooo!!!';
// void
var sing = function () {
    console.log('la la la la la la la');
};
// never
var error = function () {
    throw Error('Ooops');
};
var fightRobotArmy = function (robots) {
    console.log('Fight!!');
};
var getRectangleAreaInterface = function (args) { return args.x * args.y; };
var getRectangleAreaAliased = function (args) { return args.x * args.y; };
getRectangleAreaInterface({ x: 12, y: 7 });
getRectangleAreaAliased({ x: 12, y: 7 });
// use type alias for implementing a Class constraint
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        this.x = 2;
        this.y = 4;
    }
    return Rectangle;
}());
// use interface extended by an type for implementing a Class constraint
var RectanglePrism = /** @class */ (function () {
    function RectanglePrism() {
        this.x = 2;
        this.y = 3;
        this.z = 4;
    }
    return RectanglePrism;
}());
var Rectangle2 = /** @class */ (function () {
    function Rectangle2() {
        this.x = 2;
        this.y = 3;
    }
    Rectangle2.prototype.area = function () {
        return this.x * this.y;
    };
    Rectangle2.prototype.perimeter = function () {
        return 2 * (this.x + this.y);
    };
    return Rectangle2;
}());
