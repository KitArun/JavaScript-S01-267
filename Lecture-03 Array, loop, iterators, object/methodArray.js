let arr1 = ["A", true, 2];

//Push and pop
console.log("\n********Push and pop*******\n");
console.log(arr1.push("new value")); //push เติมหลัง
console.log(arr1); // [ 'A', true, 2, 'new value' ]
console.log(arr1.pop()); //Remove last value
console.log(arr1); // [ 'A', true, 2 ]

//Shift and unshift
console.log("\n********Shift and unshift*******\n");
console.log(arr1.unshift("new value")); //unshift เติมหน้า
console.log(arr1); // [ 'new value', 'A', true, 2 ]
console.log(arr1.shift()); //Remove First value
console.log(arr1); // [ 'A', true, 2 ]
//Concat
console.log("\n********Concat*******\n");
let arr2 = ["B", false, 3];
let newArr= arr1.concat(arr2); //arr2ต่อarr1
let newArr2= arr2.concat([1,2,3]); //1,2,3 ต่อ arr2
console.log(newArr); // [ 'A', true, 2, 'B', false, 3 ]
console.log(newArr2); // [ 'B', false, 3, 1, 2, 3 ]
