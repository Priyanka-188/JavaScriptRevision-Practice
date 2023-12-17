//  Write a function to remove duplicate elements from an array.

let arr = ["Kanha","Kanha","Kanha","Radha","Radha","Priya","Ladli",1,3,1,3];

const removeDuplicates = (arr)=>{
    let set = new Set();
    
    for(const element of arr){
        set.add(element);
    }
    arr = Array.from(set);
    
    return arr;
}

console.log(removeDuplicates(arr));
// removeDuplicates(arr);