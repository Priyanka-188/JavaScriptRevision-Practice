//Promise is an "object".
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/**
 * A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
 */
//promise take a callback function inside it and this function has two parts,  resolve and reject


//promise creation
const promiseOne = new Promise(function(resolve,reject){
    //we do async tasks here
    //like database calls, cryptographty , network calls

    setTimeout(function(){
        console.log("Async task is completed");
    },1000);
})
//promise consumption
promiseOne.then(function(){
    console.log("Promise consumed");
})
