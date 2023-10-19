const user = {
    username: "Priyanka",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


//creating a function to understand the concept of 'new' and 'this' keyword.
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Radhe", 12, true)          //if we dont put new keyword here then userTwo will overright the values of userOne.
// 'new' keyword will create a new empty object of the function
const userTwo = new User("Krishna", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
