function totalVolum(...arr) {
    const result = arr.reduce((acc,cer) => {
        const arrIn = cer.reduce((acc,cer) => acc * cer, 1);
        return acc + arrIn;
    }, 0);
    return result;
}

console.log(totalVolum([4,2,4],[3,3,3],[1,1,2],[2,1,1])); //63
console.log(totalVolum([2,2,2],[2,1,1])); // 10
console.log(totalVolum([1,1,1])); // 1
