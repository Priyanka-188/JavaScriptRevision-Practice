let score = "Kahna";

// console.log(typeof score);
// console.log(typeof(score));

let valInNumber = Number(score);
// console.log(valInNumber);
// console.log(typeof valInNumber);

/*
In above case the conversion will work like-
"33" => 33
"33abc" => NaN (not a number)
true =1 ' false=> 0;

*/

let isLoggedIn = "Priyanka";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);


/*
In case of boolean the conversion be like-
1 will be converted to true.
0 => false
"something as  string" => true
"" => false

*/

let num = 45;
let strNum = String(num);
console.log(strNum);
console.log(typeof strNum);