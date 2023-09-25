const employeeId = 24234;
let employeeName= "Priyanka";
var password = "45732";
office="open"
let address;

// employeeId= 68546; //Assignment to constant variable-not valid 
employeeName = "Krishna";
password= 54656;
address="Bharat"

/*
Prefer not to use var 
Because of issue with block scope and functional scope.
*/
console.log(employeeId);
console.table([employeeId,employeeName,password,office,address])