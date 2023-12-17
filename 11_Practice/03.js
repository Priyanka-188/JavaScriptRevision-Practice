// Write a function that returns the longest word in the sentence.

let sentence = "I love coding in Javascript";

function FindLongestWord(sent){
    let words = sent.split(" ");
    let longestword = "";

    words.forEach((item)=>{
        if (item.length >longestword.length){
            longestword = item;
        }
    })
    return longestword;
}

console.log(FindLongestWord(sentence));