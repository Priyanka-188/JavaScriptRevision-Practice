// function declaration and defination
function printMyName(){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}

//calling the function
// printMyName   ---> print nothing, it represents only the reference of function printMyName
// printMyName();   //---->executing the function


//funtion to add 2 numbers
function add(num1, num2){
    return num1+num2;
}

// console.log("The sum of 2 numbers is: "+add(3,5));       //The sum of 2 numbers is: 8

//funtion loginUser name
function loginUserName(name="Preet"){
    // console.log(`Welcome ${name}`);
    if (!name){
        console.log("Please enter a name");
        return
    }
    return `Welcome ${name}`;
}

// loginUserName("Kanha");      //Welcome Kanha
// loginUserName("");           //Welcome
// loginUserName();            //Welcome undefined


// console.log(loginUserName("Kanha"));   //Welcome Kanha
// console.log(loginUserName(""));         //Please enter a name
console.log(loginUserName());     //Welcome Preet
