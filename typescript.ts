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