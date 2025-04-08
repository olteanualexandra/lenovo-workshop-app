let hi: string = 'Hello';
console.log(hi);

//Enum
enum StatusCodes{
    NotFound =404,
    Sucess = 200,
    BadRequest = 400,
}

let nf: StatusCodes = StatusCodes.NotFound;

//typescript arrays
const recipeNames: string[] = [];
//recipenames.push(1);//error
recipeNames.push('Pasta');
//recipeNames.push(true);//error

const variable ='Typescript';
const message=  `Hello ${variable}`;

export interface User{
    name: string;
    age?: number;
}

class Car {
    model: string;
    constructor(model: string) {
        this.model = model;
    }
    drive() {
        console.log(`Driving a ${this.model}`);
    }
}
 let car = new Car('Toyota');
 car.drive(); // Output: Driving a Toyota

