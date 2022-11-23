/**
 * We can use interface or any other TypeScript valid type (which has shape of 
 * a Dictionary/JS Object) for type alias extension via intersection operator
 * 
 */
class Point {
    x: number = 0
    y: number = 0
}

interface Shape {
    area(): number
}

type Perimeter2 = {
    perimeter(): number
}

type RectangleShape = Shape & Perimeter2 & Point
class Rectangle3  implements RectangleShape {
    x = 2
    y = 3

    area() {
        return this.x * this.y
    }

    perimeter() {
        return 2 * (this.x + this.y)
    }
}