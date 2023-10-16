//Promise is an "object".
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/**
 * A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
 */
//promise take a callback function inside it and this function has two parts,  resolve and reject

/**
 * There is only one way to create promise but , we can consume promise using 2 ways
 * 1) using .then(),.catch() and .finally()
 * 2) using async and await
 */



//**************************************************** */



//Way 1 ---->storing promise in an variable
//promise creation
const promiseOne = new Promise(function(resolve,reject){
    //we do async tasks here
    //like database calls, cryptographty , network calls

    setTimeout(function(){
        // console.log("Async task is completed 1");
        resolve(); // resolve is connected with .then()
    },1000);
})
//promise consumption
promiseOne.then(function(){
    // console.log("Promise consumed 1");
})

//output
/*Async task is completed
  Promise consumed */




//******** */ Way 2 -- their is no neccessity to store the promise in a variable ************

new Promise(function(resolve, reject){
    setTimeout(()=>{
        // console.log("Async task 2");
        resolve();
    },1000);
   
}).then(function(name){
    // console.log("Promise 2 is consumed!")
    // console.log();
})

//output
/**
 *  Async task is completed 1
    Promise consumed 1
    Async task 2
    Promise 2 is consumed!
 */




//**************** Way 3 *******************
//promise resolve can also return arguments

new Promise(function(resolve,reject){
    setTimeout(()=>{
        // console.log("resolve with argument!");
        resolve({username :"Kridha" , email: "kridha@gmail.com"});   //this object will passed to the function of .then()  //normally we will pass an object or an array
    },1000)
}).then(function(user){
    // console.log(user);
})

//output 
/**
    resolve with argument!
    { username: 'Kridha', email: 'kridha@gmail.com' }
 */


//resolve() is connected with .then() and reject() is connected with .catch()



//*********** Way 4 ************/

//create promise 4
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Kridha" ,password :"143"});
        }
        else{
            reject("Error : Something went wrong!");
        }
    },1000)
})
//consume promise 4
promisefour.then(function(user){
    // console.log(user);
    return user.username;       //it will return this username to the next or further .then()
}).then(function(username){
    // console.log(username);
}).catch(function(error){
    // console.log(error);
}).finally(function(){
    // console.log("It will execute always wheather promise is resolved or rejected!")
})

//output
/**
    { username: 'Kridha', password: '143' }
    Kridha
    It will execute always wheather promise is resolved or rejected!
 */




/***************Consumtion of promise using async and await *********/


//create promise asusual
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Madhav", password:"infinity"});
        }
        else{
            reject("Error occured... Madhav");
        }
    },1000);
})
//consume promise using async function
//async and await does not handle error directly like catch , so we have to use try and catch block to handle error.
async function consumePromiseFive(){

    try{
        const response = await promiseFive;
        console.log(response);
        console.log(response.username);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();   //calling async function

//output
/**
 { username: 'Madhav', password: 'infinity' }
 Madhav
 */




 //******************* Real life use of async and await in fetching API ************** */

 async function getAllData(){
    try{
        // fetch will return an promise
        // fetch is a network request so will take time hence await it 
        const response = await fetch('https://api.github.com/users/Priyanka-188');
        // console.log(response);
        const data = await response.json();   // conversion to json will also take time so await it also
        // console.log(data);
    }
    catch(error){
        // console.log("Error : ", error);
    }
 }

 getAllData();


 

 //**fetching API using then(), catch() and finally() */

 fetch('https://api.github.com/users/Priyanka-188')
 .then(function(response){
    return response.json();
 })
 .then(function(data){
    console.log(data);
 })
 .catch(function(error){
    console.log(error);
 })
