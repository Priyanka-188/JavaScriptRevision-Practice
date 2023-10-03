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

// calling the function

// printMyName   ---> print nothing, it represents only the reference of function printMyName
printMyName();   //---->executing the function



//  ********* function to add 2 numbers *********
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


console.log(loginUserName("Kanha"));   //Welcome Kanha
console.log(loginUserName(""));         //Please enter a name
console.log(loginUserName());     //Welcome Preet




//****************** */ Functions with object and array  in javascript **************

// (... )  known as rest operator here , it us also called spread , but depends on usecase
function calculateCartPrice(val1, val2,...num){
 console.log(val1);           //4
 return num;                  //
}

// console.log(calculateCartPrice(4,5,8,23,552,0));    //[ 8, 23, 552, 0 ]  ---->printing array in output



// **************passing object as argument ******************8

function handleObject(anyobject){
    console.log(`${anyobject.username} has ${anyobject.id} id.`);
}

const user = {
    username : "Priyanka",
    id : "33r4"
}

handleObject(user);      //Priyanka has 33r4 id.

const user1 = {
    name : "Kesav",
    id : 6464
}

handleObject(user1);   //undefined has 6464 id.       --->undefined beacuse  username doesnot match with name
//we can direct pass objects as arguments
handleObject({
    username:"Madhav",
    id : 4533
})                //Madhav has 4533 id.




// ******************* passing objarray as argument **********************88
function returnSecondElement(anyArray){
    return anyArray[1];
}

const arr = [1,47,36,0,12];       //47

console.log(returnSecondElement(arr));

//we can direct pass an array

console.log(returnSecondElement([2,3,4,5,6]));    //3