// Ques. Write a function that returns the reverese of the string.


let name = "Radha Krishna";

// way1 ---> using inbuilt methods
/*
function reverseString(str){

    return str.split("").reverse().join("");
}
console.log(reverseString(name));

*/

//way 2----> without using inbuilt methods

const reverseStr = (str)=>{
    let newstr = "";

    for (let i=str.length-1 ; i>=0; i--){
        newstr+=str[i];
    }
    return newstr;
}

console.log(reverseStr(name));