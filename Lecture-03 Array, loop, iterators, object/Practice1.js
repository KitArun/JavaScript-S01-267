let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, "Mars"];
let values3 = ["Mars", 9, "Apple"];

// Initialize an empty array to store common elements
let commonElements = [];

// Loop through values1 and check if the element exists in both values2 and values3
for (let i = 0; i < values1.length; i++) {
  if (values2.includes(values1[i]) || values3.includes(values1[i])) {
    commonElements.push(values1[i]);
  }
}

for (let i = 0; i < values2.length; i++) {
  if (values1.includes(values2[i]) || values3.includes(values2[i])) {
    commonElements.push(values2[i]);
  }
}

console.log(commonElements);
