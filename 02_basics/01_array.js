// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a
//  single variable name, and has members for performing common array operations.

let arr = [1,2,5,68];
// console.log(arr);               //[ 1, 2, 5, 68 ]

// JS arrays are resizable and can contain mix of different data types.
//we can define JS arrays in two ways.

let arr1 = [2,45, "Krish", "Priyanka","Kesav", true, 23.9]   
// console.log(arr1);                  //[ 2, 45, 'Krish', 'Priyanka', 'Kesav', true, 23.9 ]

let arr2 = new Array(1,2,6,82);
console.log(arr2);              //[ 1, 2, 6, 82 ]

//ARRAY METHODS

arr2.push(7);
console.log(arr2);

arr2.push("Hrikesh");
console.log(arr2);       //1, 2, 6, 82, 7, 'Hrikesh' ]

let v = arr2.pop();    //pop() will return the deleted element
console.log(arr2);      //[ 1, 2, 6, 82, 7 ]
console.log(v);     //Hrikesh

arr2.unshift("Kanha");      // unshift() will add the value inside it at 0th index and will shift all values in right by 1 position.
console.log(arr2);          //[ 'Kanha', 1, 2, 6, 82, 7 ]

let val=arr2.shift();            // shift() will remove and return the value at 0th index and shift all other elements towards left by 1 position/index.
console.log(arr2);      //[ 1, 2, 6, 82, 7 ]
console.log(val);       //Kanha

console.log(arr2.includes("Kanha"));    //false   //includes() will check for a value if it is present in the arrray or not ..return true or false
console.log(arr2.indexOf(1));        //0   // return index of 1 in the array


let newArr = arr2.join();            //join() will assign all the values of arr2 to newArr but in STRING format(It will change the data type).

console.log(arr2);                   // [ 1, 2, 6, 82, 7 ]  
console.log(newArr);            //1,2,6,82,7


//slice and splice
/*
slice will not include the end range during slicing but splice include the end range during the splicing.
slice does not manipulate the original array it returns a new array after slicing WHILE splice manipulate the original array.
*/

console.log("original array",arr2);          //original array [ 1, 2, 6, 82, 7 ]

let sliceArr = arr2.slice(0,3);                
console.log("Slice",sliceArr);                ////Slice [ 1, 2, 6 ]   // does not include 3rd index.
console.log("original array after slice",arr2);     //original array after slice [ 1, 2, 6, 82, 7 ]       //no changement in original array

let spliceArr = arr2.splice(0,3);
console.log("Splice",spliceArr);        //Splice [ 1, 2, 6 ]
console.log("original array after splice",arr2);            //original array after splice [ 82, 7 ]      //changes orignal array