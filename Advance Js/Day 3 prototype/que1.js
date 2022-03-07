
var grandfather={
    Name:"Shamraoji",
    Surname:"mude",
    Langauge:"marathi",
    Nationality:"india",
}

var father=Object.create(grandfather);
father.name="Dadarao";

var me=Object.create(father)
me.name="Ritesh"
console.log(grandfather);
console.log(father.Langauge);
console.log(me);

