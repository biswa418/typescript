"use strict";
console.log('Hello world');
let age = 20;
if (age > 50)
    age += 10;
console.log(age);
let price = 123456789;
let string = 'Typescript';
let bool = true;
let level;
let numbers = [];
let num = [];
numbers.forEach(n => n.toString);
let user = [2, 'Hello'];
console.log(user);
user[0].toString();
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let size = Size.Medium;
console.log(size);
let size2 = 2;
console.log(size2);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(50000);
let employee = {
    id: 1,
    name: 'Biswajeet',
    retire: (date) => { console.log(date); }
};
let employee1 = {
    id: 1,
    name: 'Biswajeet',
    retire: (date) => { console.log(date); }
};
function weightCheck(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
weightCheck(10);
weightCheck('10');
let box1 = {
    drag: () => { },
    resize: () => { }
};
let quantity2 = 50;
function sayHi(name) {
    if (name)
        console.log('Hola ', name);
    else
        console.log('Hello');
}
sayHi(null);
sayHi('Ram');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer)
    console.log(customer.birthday);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log = (message) => console.log(message);
log('a');
//# sourceMappingURL=index.js.map