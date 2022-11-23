/**
 * We can use interface or any other TypeScript valid type (which has shape of
 * a Dictionary/JS Object) for type alias extension via intersection operator
 *
 */
var Point = /** @class */ (function () {
    function Point() {
        this.x = 0;
        this.y = 0;
    }
    return Point;
}());
var Rectangle3 = /** @class */ (function () {
    function Rectangle3() {
        this.x = 2;
        this.y = 3;
    }
    Rectangle3.prototype.area = function () {
        return this.x * this.y;
    };
    Rectangle3.prototype.perimeter = function () {
        return 2 * (this.x + this.y);
    };
    return Rectangle3;
}());
