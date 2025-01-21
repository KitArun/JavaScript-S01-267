function canMove(piece,fromSquare,toSquare) {
    const file = [];
    const rank = [];
    const bool = [];

    if (fromSquare != toSquare) {
        const square = [fromSquare, toSquare];

        for (let i = 0; i < square.length; i++) {
            file.push(square[i].charAt(0).toLowerCase());
            rank.push(parseInt(square[i].charAt(1)));

            const locationChar = ['a','b','c','d','d','e','f','g','h'];
            bool.push(locationChar.includes(file[i]) && (rank[i] >= 1 && rank[i] <= 8));
        }
    }
    const ascil = Math.abs(file[0].charCodeAt(0) - file[1].charCodeAt(0));
    const number = Math.abs(rank[0] - rank[1]);
    const correct = bool[0] === true && bool[1] === true;

    while (correct) {
        switch (piece.toLowerCase()) {
            case 'pawn':
                return ascil === 0 && number === 1 && rank[0] < rank[1];
            case 'knight':
                return (ascil !== 0 && number !== 0) && (ascil === 1 && number === 2) || (ascil === 2 && number === 1);
            case 'bishop':
                return ascil == number;
            case 'rook':
                return ascil === 0 || number === 0;
            case 'queen':
                return ascil === number || ascil === 0 || number === 0;
            case 'king':
                return (ascil === 0 && number === 1) || (number === 0 && ascil === 1) || (ascil === 1 && number === 1);
            default:
                return false;
        }
    }
    return false;
}

console.log(canMove("Rook","A8","H8")); // true
console.log(canMove("Bishop","D4","G1")); // true
console.log(canMove("Queen","C4","D6")); // false
console.log(canMove("Pawn","C4","C5")); // true
console.log(canMove("Knight","D4","F6")); // false
console.log(canMove("King","F5","D3")); // false