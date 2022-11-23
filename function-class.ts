interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

// function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('FIGHT!')
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
    console.log('FIGHT')
    return 5
}

// class
class Animal {
    private sing: string = 'la la la la la la la la la la la la la la la la la'

    constructor(sound: string) {
        this.sing = sound
    }

    greet() {
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('RAAAAWWRRRR')