let a = 10;
const b= 20;
var c = 30;

// console.log(a);  //10
// console.log(b);  //20
// console.log(c);  //30


// if(true){
//     let a =50;
//     // cont b=255;
//     //var c =34;
// }


// console.log(a);  10
// console.log(b);  //20
// console.log(c);  //30



//****** difference between let and var */
/**
 -> let is block scoped , but var is not

 -> Once we declare a variable using let , we can not redeclare it using another keyword(const or var)
    but we can reinitialise its value

 -> In case of var , we can do everything , we can redeclare its value as well as we can reassign it 


 {} is scope, curly braces are scope itself.
 
 The value/variable of global scope is available inside local scope, but the value og local scope shold not be 
 available outside the local scope, and this rule is violated by var , therefore we don't recommed to use it
 */