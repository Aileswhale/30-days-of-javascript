let love =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let numLove = love.match(/love/gi);
let arrlth = numLove.length;

let bcos =
  "You cannot end a sentence with because because because is a conjunction";

let numBcos = bcos.match(/because/gi);
let arrbcos = numBcos.length;

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let newSent = sentence.replace(/[@&$%#;]/gi, "");

let income =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let onlyIn = income.match(/\d+/g);

console.log(newSent);
console.log(numLove, arrlth);
console.log(numBcos, arrbcos);
console.log(onlyIn);