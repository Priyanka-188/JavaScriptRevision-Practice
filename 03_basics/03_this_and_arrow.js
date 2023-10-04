//this keyword tells about the current context.
// to understand arrow functions , we should have knowledge of this keyword ,
//and to understand this keyword we have to go back in objects

// this keyword
const user = {
    username : "Madhav",
    price :223,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website.`)
        console.log(this); /*context of this inside the object is
                               {
                                    username: 'Madhav',
                                    price: 223,
                                    welcomeMessage: [Function: welcomeMessage]
                                } 
      After changing username to Kesav , this will print,
                               {
                                username: 'Kesav',
                                price: 223,
                                welcomeMessage: [Function: welcomeMessage]
                                }
                                */
    }
}
// user.welcomeMessage();       //Madhav , welcome to website.
// user.username = "Kesav";
// user.welcomeMessage();         //Kesav , welcome to website.

// console.log(this);      //context of 'this' outside is an empty object, ----> {} , but the context of "this" in a browser console will be window object with so many functions

//the global object in browser is 'window object'.

// normal function
// const chai = function(){
//     let username = "hitesh";
//     // console.log(this);      //we get global values and other properties
//     console.log(this.username);   //undefined ---> so this context willl work only in object not in functions
// }
// chai();


//arrow function

const chai = () =>{
    let username = "hitesh";
    // console.log(this);           // the context of 'this' in the arrow function case is empty object ---> {}
    console.log(this.username);     //undefined  so this context willl work only in object not in functions
}
// chai();

// ways of defining and using arrow functions


// way 1

// const addTwo = (num1,num2) =>{
//     return num1+num2;             //explicit return
// }
// console.log(addTwo(3,6));    //9


//way 2  --> implicit return 

// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(4,6));     //10


const addTwo = (num1,num2) => (num1 + num2);           //this way is mostly use in reactjs

// console.log(addTwo(2,6));       //8


//If we use curly braces{} to define the body of the arrow function , then we have to use return keyword,
//but if we use parenthesis () to define the body of the arrow function, their is not need to write return keyword.


//how to return object from arrow function

// const objectreturn = (num1, num2)=> {username : "Hari"}  // return undefined

const objectreturn = (num1, num2) => ({username :"Hari"})     //{ username: 'Hari' }

//so to return an object we have to use parenthesis() , if we not use parentehesis () it will return undefined
console.log(objectreturn());