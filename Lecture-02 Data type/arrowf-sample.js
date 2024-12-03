/// Arrow funtion with two arguments
const sum = (firstParam, secondParam) => {
  return firstParam + secondParam;
};
console.log(sum(2, 5)); // Prints: 7

// Arrow funtion with no arguments
const pringHello = () => {
  console.log("hello");
};
printHello();

//Arrow funtions with a single argument
const checkWeight = (weight) => {
  console.log(`Baggage weight : ${weight} kilograms.`);
};
checkWeight(25); // Prints: Baggage weight : 25 kilograms

// Concide arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Prints: 60
