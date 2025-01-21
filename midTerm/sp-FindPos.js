function findPos(pos) {
    const data = Array(41);
    let posmove = 31;
    data[31] = 'player';

    for (let i = 0; i < pos.length; i += true) {
        let position = pos[i].toUpperCase();
        if (position === 'N') {
            data.splice(posmove, 1);
            data[posmove -= 7] = 'player';

        } else if (position === 'E') {
            data.splice(posmove, 1);
            data[posmove += 1] = 'player';

        } else if (position === 'W') {
            data.splice(posmove, 1);
            data[posmove -= 1] = 'player';

        } else if (position === 'S') {
            data.splice(posmove, 1);
            data[posmove += 7] = 'player';
        }
    }

    if (pos.some(direction => [
            'A', 'B', 'C', 'D', 'F',
            'G', 'H', 'I', 'J', 'K',
            'L', 'M', 'O', 'P', 'Q',
            'R', 'T', 'U', 'V', 'X',
            'Y', 'Z'
        ].includes(direction))) console.log ('GAME OVER!, YOU FOUL!!!');
    else if (data[13] == 'player') console.log ('Last Position : TG1 , You WIN!');
    else if (data[14] == 'player') console.log ('Last Position : TG2 , You WIN!');
    else console.log (`Last Position : ${posmove}  , You LOSE! :()`);
}

const pos1 = ['n', 'e', 'n', 'E', 'e', 'n'];
const pos2 = ['n', 'e', 'e', 'N', 'e', 'n'];
const pos3 = ['n', 'e', 'W', 'w', 'w', 'w', 'n'];
const pos4 = ['n', 'e', 'n', 'e', 'e', 's'];
const pos5 = ['w', 'e', 'n', 'X', 'e', 's'];

findPos(pos1); // Last Position : TG1 , You WIN!
findPos(pos2); // Last Position : TG1 , You WIN!
findPos(pos3); // Last Position : TG2 , You WIN!
findPos(pos4); // Last Position : 27  , You LOSE! :()
findPos(pos5); // GAME OVER!, YOU FOUL!!!