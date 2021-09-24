// The ... syntax represents a spread/rest operator, depending on how it is used

// We can "spread" the contents of one item into another
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];
console.log(newArray);

// Rest operator also works with objects
oldObject = {
  name: "Max",
  age: 5,
};
newObject = { ...oldObject, gender: "male" };
console.log(newObject);

// The rest operator can merge a list of function arguments into an array
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3, 1, 4, 1));
