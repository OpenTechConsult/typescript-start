// boolean
let isCool: boolean = true

// Number
let age: number = 56

// string
let eyeColor: string = 'brown'
let favouriteQuote: string = `I am not old, I am only ${age}`

// array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

// Objects
let wizard: object = {
    a: 'John'
}

// null and undefined
let meh: undefined = undefined
let noo: null = null

// Tuple
let basket: [string, number]
basket = ['basketball', 5]

// Enum
enum Size {Small = 1, Medium = 2, Large = 3}
let sizeName: number = Size.Small

// Any
let whatever: any = 'aghhhhh noooooo!!!'

// void
let sing = (): void => {
    console.log('la la la la la la la')
}

// never
let error = (): never => {
    throw Error('Ooops')
}

// Interface
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('Fight!!')
}

interface PointInterface {
    x: number
    y: number
}

type PointType = {
    x: number
    y: number
}

const getRectangleAreaInterface = (args: PointInterface) => args.x * args.y
const getRectangleAreaAliased = (args: PointType) => args.x * args.y

getRectangleAreaInterface({x: 12, y: 7})
getRectangleAreaAliased({x: 12, y: 7})

// extend an interface with type alias
interface ThreeDimension extends PointType {
    z: number
}

// use type alias for implementing a Class constraint
class Rectangle implements PointType {
    x = 2
    y = 4
}

// use interface extended by an type for implementing a Class constraint
class RectanglePrism implements ThreeDimension {
    x = 2
    y = 3
    z = 4
}

// we can also combine both type alias and interface for implementing a Class constraint
interface Shape {
    area(): number
}

type Perimeter = {
    perimeter(): number
}

class Rectangle2 implements PointType, Shape, Perimeter {
    x = 2
    y = 3
    
    area() {
        return this.x * this.y
    }

    perimeter() {
        return 2 * (this.x + this.y)
    }

}