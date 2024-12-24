const cat = {
    name: "Pipey",
    age: 8,
    whatName(){return this.name;},
    whatAge(){return this.age;}
};

console.log(cat.whatName());
console.log(cat.whatAge());
//Output: Pipey
cat.name="Nezzar";
console.log(cat.whatName());