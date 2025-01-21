function captoFront(str) {
    const upper = [];
    const lower = [];
    for(const char of str) {
        if (char === char.toUpperCase()) {
            upper.push(char);
        } else {
            lower.push(char);
        }
    }
    const result = upper.join('') + lower.join('');
    return `"${result}"`;
}

console.log(captoFront("hApPy")); // "APhpy"
console.log(captoFront("moveMENT")); // "MENTmove"
console.log(captoFront("shOrtCAKE")); // "OCAKEshrt"
