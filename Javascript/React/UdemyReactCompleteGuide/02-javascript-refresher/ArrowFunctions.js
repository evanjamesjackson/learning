// Functions are typically declared like so
function printMyName(name) {
  console.log(name);
}

printMyName("Max");

// Anonymous functions ("arrow functions") are defined like this
const printMyNameArrowFunc = (name) => {
  console.log(name);
};
printMyNameArrowFunc("Evan");

// Arrow functions that return values can be shortened like so
const multiply = (number) => number * 2;
console.log(multiply(3)); // logs 6
