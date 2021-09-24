// Destructuring allows us to extract array elements or object properties, and store them as variables
const numbers = [1, 2, 3];
[a, b] = numbers;
console.log(a, b);

const { name } = { name: "Max", age: 5 };
console.log(name);
