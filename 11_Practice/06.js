// Write a function to  check wheather two strings are anagrams or not ?


const str1 = "Silent";
const str2 = "listen";

function areAnagram(str1, str2){

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");

    if (str1 === str2){
        console.log(`${str1} and ${str2} are anagrams`);
    }
    else{
        console.log(`${str1} and ${str2} are not anagrams`);
        
    }
}

areAnagram(str1,str2);