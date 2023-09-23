let challenge = "30 Days Of JavaScript";

let tech = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

let sentence =
  "You cannot end a sentence with because because because is a conjunction";

let chal = " 30 Days Of JavaScript ";

let a = "30 Days of";
let b = "JavaScript";

let conc = " ";

console.log(challenge);
console.log(challenge.length());
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(1));
console.log(challenge.substring(2));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
console.log(tech.split(" "));
console.log(challenge.replace("JavaScript", "python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));
console.log(chal.trim());
console.log(challenge.startsWith(30));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match(/a/gi));
console.log(conc.concat(a, b));
console.log(challenge.repeat(2));
