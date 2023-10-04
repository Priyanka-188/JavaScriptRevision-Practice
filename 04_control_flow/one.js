// if statement 

// if(2==2){
//     console.log("yes");
// }

//if -else

let isLoggedIn = false;
// if(isLoggedIn){
//     console.log("logged in");
// }
// else{
//     console.log("Not logged in");   //Not logged in
// }


// < , > , <= , >= , == , === , != , !==



// if(2!=="Krishna"){
//     console.log("Yes, Krishna is not equal to 2")    ;  //Yes, Krishna is not equal to 2
// }

// shorthand notation
// if(5>2) console.log("Yes"), console.log("yes it is");            //but it is not recommended as it reduces code readability


//you can write multiple conditions using if else ladder

//check multiple conditions using and(&&) and or (||)


//Real life use of conditionals

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}