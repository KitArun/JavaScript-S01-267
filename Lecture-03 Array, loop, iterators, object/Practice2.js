let furniture = ['Table', 'Chairs', 'Couch'];
for (let index = 0; index < furniture.length; index++) {
    const name = furniture[index];

    for(let char of (name)){
        //triggers 4 times: once for each character
        console.log(char);// t, then e, then s, then t
    }
    console.log();
}