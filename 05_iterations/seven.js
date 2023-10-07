// *************** Map function  ***********
const myNums = [1,2,3,4,5,6,7,8,9,10];

//I have to add 10 in each value in above array

let newnum = myNums.map((num)=> num+10);
// console.log(newnum);     //[ 11, 12, 13, 14, 15,  16, 17, 18, 19, 20]
   


//****************  chaining  ************

const chainNums = myNums
                  .map( (num) => num * 10 )
                  .map( (num) => num+1)
                  .filter( (num) => num>40 )

console.log(chainNums);  
                        // [
                        //     41, 51,  61, 71,
                        //     81, 91, 101
                        // ]