// Write a function to calculate factorial of a number.

// one way
function factorail(num){
    if(num===1)
        return 1;

    return num* factorail(num-1);
}

// console.log(factorail(5));
// console.log(factorail(5));
// console.log(factorail(6));

const fact = (num)=>{
    let factorial = 1;
    for(let i=1; i<=num ; i++){
        factorial = factorial*i;
    }
    return factorial;
}

console.log(fact(5));
