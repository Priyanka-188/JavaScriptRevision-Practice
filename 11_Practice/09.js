//Write a function to check if a given number is prime or not?

let num = 15;

const isPrime = (num)=>{
    for(let i=2; i<num/2 ; i++){
        if (num % i ===0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(num));
console.log(isPrime(5));