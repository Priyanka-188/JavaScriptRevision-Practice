// write a function that returns the number of vowels in a string

let str = "dwarikadhish aasArkAr";

function NoOfVowels(str){
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;

    let arr = str.split("");

    arr.forEach(alphabet => {
        if (vowels.includes(alphabet)){
            count++;
        }
    });

    return count;
}

console.log(NoOfVowels(str));