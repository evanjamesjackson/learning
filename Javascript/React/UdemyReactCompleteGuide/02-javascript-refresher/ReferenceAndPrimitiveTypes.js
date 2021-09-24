// Primitive type are "copy by value". The value of num1 is copied into num2 - and changing num1 does not affect num2.
let num1 = 1;
let num2 = num1;
num1 = 2;
console.log(num1, num2);

// Objects are reference types (i.e. when copying, only the reference is copied)
const person = {
  name: "Max",
};
const secondPerson = person;
person.name = "Manu";
console.log(secondPerson);

// The spread operator allows us to create real deep copies of objects
const realCopiedPerson = { ...person };
person.name = "Evan";
console.log(realCopiedPerson); // will still print Manu
