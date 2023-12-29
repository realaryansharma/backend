var a = 12;
var b = 13;
var c = 15;

// module.exports = c;

// what if I want to export two variables? can I write two exports?
// module.exports = a
// module.exports = c
// WRONG!!!
// One file can only export one element, therefore you can't do this. But what can I do now?
// Soultion: send these two or more than two variable as an object; an object can be comprised of multiple elements and
// still will be sent as an single entity :)

module.exports = {fVar: a, sVar: c};