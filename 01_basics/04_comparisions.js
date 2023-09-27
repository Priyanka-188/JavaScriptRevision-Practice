//sometime they don't give desired results , so keep in mind while conversion that data type of both operands should be same

console.log("20">1);         //true
console.log("5">3);         //true


console.log(null>0);   //false ---1
console.log(null==0);  //false ---2
console.log(null>=0);    //true ---3

/*
The reason is that an equality check == and comparisons >< >= <= work differently.
Comparisions convert null to a number, treating it as 0.
That's why (3) null >=0 is true and (1)null>0 is false. */

console.log(undefined ==0);  //false
console.log(undefined >0);   //false
console.log(undefined <0);  //false

//=== (strick check)
// == it will compare the value only not datatypes
// === it will compare both value and datatype of operands