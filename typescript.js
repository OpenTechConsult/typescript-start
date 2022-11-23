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
