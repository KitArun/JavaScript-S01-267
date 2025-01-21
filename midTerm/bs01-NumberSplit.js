function numberSplit(num) {
    const result = [];

    if (num % 2 === 0) {
        result.push(num / 2);
        result.push(num / 2);
    } else {
        result.push(Math.floor(num / 2)); // ปัดลง
        result.push(Math.ceil(num / 2)); // ปัดขึ้น
    }

    return result;
}

console.log(numberSplit(4)); // [ 2, 2 ]
console.log(numberSplit(10)); // [ 5, 5 ]
console.log(numberSplit(11)); // [ 5, 6 ]
console.log(numberSplit(-9)); // [ -5, -4 ]