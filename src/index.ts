///////////////////////////////////////////////////////////
// Write hello world
console.log('Hello world');

///////////////////////////////////////////////////////////
// Simple program
let age: number = 20;

if (age > 50)
    age += 10;

console.log(age);
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Debugging - refer vscode file above - 
// can be done with tsc: build - tsconfig.json
///////////////////////////////////////////////////////////
// FUNDAMENTALS
///////////////////////////////////////////////////////////
// string, number, boolean
let price = 123_456_789; // same as - let price: number = 123456789;
let string = 'Typescript'; // same as - let string: string = 'Typescript';
let bool = true; // same as - let bool: boolean = true;

let level; // same as - let level: any -- try to avoid as much as possible

//////////////////////////////////////////////////////////
// array
let numbers: number[] = []; // elements will only have the type number
let num = []; // hover over num on code editor -- shows as any []

numbers.forEach(n => n.toString); // auto completion as the compiler understands the type of elements inside the array

//////////////////////////////////////////////////////////
// tuples - [key, value] -- advised for smaller ones
let user: [number, string] = [2, 'Hello'];
console.log(user);

user[0].toString();  // auto completion for each of the data type --- nice feature to have

///////////////////////////////////////////////////////////
// enums - list of related constants

// example -> Small - 1, Medium - 2, Large - 3
enum Size { Small = 1, Medium, Large }
let size: Size = Size.Medium;

console.log(size);

// more optimize
const enum Size2 { Small = 1, Medium, Large }
let size2: Size2 = Size2.Medium;
console.log(size2);


///
// functions -- unused parameters show -- tsconfig
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;

    return income * 1.3;
}

// make the taxYear optional
// function calculateTax(income: number, taxYear?: number): number {

calculateTax(50_000);


// objects
let employee: {
    readonly id: number, // readonly - once defined can't be changed
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Biswajeet',
    retire: (date: Date) => { console.log(date) }
}



//---------------------------
// ADVANCED
//---------------------------


// type aliases
// so the obove employee object has to repeat it's type each time a new employee is added... to avoid that

type Employee = {
    readonly id: number, // readonly - once defined can't be changed
    name: string,
    retire: (date: Date) => void
}

let employee1: Employee = {
    id: 1,
    name: 'Biswajeet',
    retire: (date: Date) => { console.log(date) }
}


// union types
function weightCheck(weight: string | number): number {
    if (typeof weight === 'number')
        return weight * 2.2;

    else
        return parseInt(weight) * 2.2;
}

weightCheck(10);
weightCheck('10');

//intersection types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIElement = Draggable & Resizable; // create the new type from intersection before -->  so it's both draggable and resizable --> both methods will be avaialable inside the function

let box1: UIElement = {
    drag: () => { },
    resize: () => { }
}

// literal types
// to limit the possible values
type Quantity = 50 | 100;

// let quantity: Quantity = 10; // gives error on compilation
let quantity2: Quantity = 50; // fine


//nullable types
function sayHi(name: string | null | undefined): void {
    if (name)
        console.log('Hola ', name);
    else
        console.log('Hello');
}

sayHi(null);
sayHi('Ram');

// optional chaining
type People = {
    birthday: Date
}

function getCustomer(id: number): People | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0);

if (customer)
    console.log(customer.birthday); // customer can be null --> compilation error
console.log(customer?.birthday);

// optional element check
// customer?.[0]

// optional call operator
let log: any = (message: string) => console.log(message);
let log2: any = null;

log('a');
// log2('a'); //error cause of the null --> runtime error tho

