const userEmail = "kanha@vrindaan.in"; 

if(userEmail) {
    console.log("Got user email");
}
else{
    console.log(("Don't have user email"));
}   //Got user email

/**
 * Truthy values In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
 *  Falsy values In JavaScript, a falsy value is a value that is considered false when encountered in a Boolean context.
 * 
 * A falsy value is something which evaluates to FALSE, for instance when checking a variable.
 */

//falsy values --->

//false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
//except above falsy values all othre are truthy values

//truthy values ---> surprising truthy values

// "0" , 'false' , " " , [] ,{} , function(){}


if(userEmail.length === 0){
    console.log("Array is empty");
}//Got user email


const emptyObj = {}
//Object.keys(emptyObj) ,it will return an array , ans as we know array is a truthy value, so the consition evaluates into true

if(Object.keys(emptyObj).length ==0){
    console.log("Object is empty");
}   //object is empty






///Nullish Coalescing Operator (??)  : here we have to see on two values only ---> null, undefined

/**
 * The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand
   when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.
 */

let val1;
// val1 = 5 ?? 10      //5

// val1 = null ?? 10      //10

// val1 = undefined ?? 15     //15

val1 = null ?? 10 ?? 18     //10 

console.log(val1);




//Terniary operator
/**
 * “Ternary” means “composed of three items.”
 * The conditional (ternary) operator is the only JavaScript operator that takes three operands:
    a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by
    a colon ( : ), and finally the expression to execute if the condition is falsy.
 */

// syntax:     
// condition ? true ? false

const num = 10;

num>15  ? console.log("num is greater than 15") : console.log("Less than 15");        //Less than 15