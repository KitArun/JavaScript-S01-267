function circumference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
        return0;
    }
    return parseFloat(r) * 2.0 * Math.PI
}

console.log(circumference("4.567abcdefgh"));
// expected output: 28.69530729789173
console.log(circumference("abcdefgh"));
// expected output: 0

