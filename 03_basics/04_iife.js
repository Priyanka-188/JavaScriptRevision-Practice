// Immediately Invoked Function Expressions (IIFE)  

/*two reasons to use IIFE
1) to prevent pollution from global scope .
2) and to immediatly execute the function .

syntax-
()();           //don't forget to put semicolon(;) at the end

-> first parenthesis() is for function body or function defination
-> and second for execution call of function

we can write any type of function in it ,whether it is a normal function or arrow function

*/

// this is named IFII as it has a name chai
(function chai(){
    console.log("This is milk tea");
    console.log("DB connected");
})();     //This is milk tea
          //DB connected



//arrow function inside IIFE
//this is unnamed IIFE

( ()=>{
    console.log("DB is connected again");
})();    //DB is connected again


//IIFE also expects variable

( (name)=>{
    console.log(`Blessed by ${name}`);
})("Krishna");      //Blessed by Krishna