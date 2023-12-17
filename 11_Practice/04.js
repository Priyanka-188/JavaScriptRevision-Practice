// Write a function to check wheather a string is palindrome or not?

let str = "Harah";

function isPalindrome(str){
    str = str.toLowerCase();
    
    let reverseStr = str.split("").reverse().join("");
   
    if (str === reverseStr){
        console.log(`${str} is a palindrome.`);
    }else{
        console.log(`${str} is not a palindrome.`);
    }
}
isPalindrome(str);