// two types of memory
//1.stack and  2.heap
// stack for primitive data values and heap for non-primitive data values.

// 1. Primitive type
let myName = "Priyanka";
let newName = myName;
// console.log(newName);  //Priyanka

//In stack memory only a copy of the variable passes to new variable not the original reference.
newName = "Saini";
// console.log(myName);// Priyanka
// console.log(newName);//Saini  


// 2. Non-primitive type =>In case of non-primitive data types when we assign the value of a variable to
// another variable then the reference/address of the original value will be passes and when we change the
// value of the new variable . As both the variables are referencing the same address the value for both of
//them will be changed. 
let user ={
    name :"Kesav",
    Phone : 98446452,
    isEnrolled: true
}

let user2 = user;
console.log(user2);

user2.name="Mohan";
console.log(user.name);
console.log(user2.name);
