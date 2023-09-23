let quote = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`;

let quote2 = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`;

let num = "10";
let cgnum = +num;

let float = "9.8";
let cgfloat = +float;
let floatint = Math.ceil(cgfloat);

let p = "python";
let j = "jagon";

p.includes("on");
j.includes("on");

let jargon = "I hope this course is not full of jargon";
jargon.includes("jargon");

let rdm = Math.random();
let genrdm = Math.floor(rdm * 101);

let rand = Math.random();
let genRand = Math.floor(rdm * 51 + 50);

let rdom = Math.random();
let genrdom = Math.floor(rdm * 256);

let word = "Javascript";
let rdomWord = Math.random();
let genRdomWord = Math.floor(rdm * 11);
word.charAt(genRdomWord);

let string =
  "You cannot end a sentence with because because because is a conjunction";
let newString = string.substring(31, 55);

let NewText =
  "You cannot end a sentence with because because because is a conjunction";
let textArr = string.split(" ");
let newTextArr = textArr.slice(6, 9);

console.log(quote);
console.log(quote2);
console.log(cgnum);
console.log(floatint);
console.log(p, j);
console.log(jargon);
console.log(genrdm);
console.log(genRand);
console.log(genRdomWord);
console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");
console.log(newString, newTextArr);
