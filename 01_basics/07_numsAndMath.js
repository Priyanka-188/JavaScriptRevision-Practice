//////////////////////////// Numbers ///////////////////////////////

const marks = 34;
console.log(marks);  //34

let num = new Number(52);
console.log(num);       //[Number: 52]

console.log(num.toString().length);   //52
console.log(num.toFixed(2)) ;       //52.00    // , toFixed(2) will set the 2 values after decimal point


const num2 = 23.5336;
console.log(num2.toPrecision(3)); //23.5          ,,,,,focus only on 3 values including non decimal values
console.log(num2.length);     //undefined because of decimal

const hundreds = 10000000;
console.log(hundreds.toLocaleString());    //10,000,000 -> American standard to represent
console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,000  -> Indian standard




// ################## MAths ####################

/* Maths library in JS is a default library , we don't have to necessarily import it */

console.log(Math);       //Object [Math] {}      //we will get all its' properties when we go in console of website and print Math

console.log(Math.abs(-5)) // abs() convert all value to positive values

console.log(Math.round(4.68));  //5

console.log(Math.ceil(8.2));      //9

console.log(Math.floor(8.2));       //8

console.log(Math.min(2,4,6,7));   //2


console.log(Math.random());       //gives value between 0 and 1

console.log(Math.random()*10);     //value between 0 and 10

console.log((Math.random()*10) + 1)  //value btw 1 and 10

console.log(Math.round(Math.random()*10)+1);   //give rounded value

const randNum = (Math.random()*10)+1;

console.log(randNum);    //8.014236539407603

console.log(Math.round(randNum));  //8

console.log(Math.floor(randNum));  //8

console.log(Math.ceil(randNum));   //9

console.log(randNum.toFixed(2));      //8.01

console.log(randNum.toPrecision(2));  //8.0


//How to generate random values between a range
const min = 10;
const max = 20;
let randNum2 = Math.random() * (max - min + 1) + min;
console.log(randNum2);              //13.879926381690753
console.log(Math.round(randNum2));  //14