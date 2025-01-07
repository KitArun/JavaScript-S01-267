// libArea.mjs
function areaTriangle(b,h) {
    return (b*h)/2;
}

function areaCircle(r) {
    return Math.PI * r*r;
}

function areaSqr(weight,length) {
    return weight*length;
}

export {areaCircle, areaTriangle, areaSqr};
