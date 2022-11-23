// function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT');
    return 5;
};
// class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'la la la la la la la la la la la la la la la la la';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('RAAAAWWRRRR');
