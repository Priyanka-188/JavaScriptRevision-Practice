let a = 10;
const b= 20;
var c = 30;

// console.log(a);  //10
// console.log(b);  //20
// console.log(c);  //30


// if(true){
//     let a =50;
//     // cont b=255;
//     //var c =34;
// }


// console.log(a);  10
// console.log(b);  //20
// console.log(c);  //30



//****** difference between let and var */
/**
 -> let is block scoped , but var is not

 -> Once we declare a variable using let , we can not redeclare it using another keyword(const or var)
    but we can reinitialise its value

 -> In case of var , we can do everything , we can redeclare its value as well as we can reassign it 


 {} is scope, curly braces are scope itself.

 The value/variable of global scope is available inside local scope, but the value og local scope shold not be 
 available outside the local scope, and this rule is violated by var , therefore we don't recommed to use it
 */


 //************* Nested Scopes **********8

 function one(){
       const username = "Priyanka";

       function two(){
            const designation = "Learner";
            // console.log(username + designation);   //PriyankaLearner
       }

    //    console.log(designation);  //will throw an error because it's scope is local and we are trying to access it outside of its scope
       
       two();
 }

//  console.log(username);    //will throw error because its scope is function one only and we are accessing it outside of it

//  one();




 ////////////////#################////////////////////////

 if(true){
    const username ="Hitesh";

    if(username === "Hitesh"){
        const website = "Youtube";
        // console.log(username + website);    //HiteshYoutube     ---> //accessing username which is its patent scope variable , so will not through error
    }

    // console.log(website);      //website is not defined --> // throw error accesing local scope variable in its parent     
}

// console.log(username);    //username is not defined --->  //will throw error as it is local scope varialbe 



//********************* Interesting *********************8 */


console.log(addone(5));     //6 --->give no error  //calling function before declaration is known as "Hoisting" in JS.

//It is called normal function
function addone (num){
    return num + 1;
}

addone(2);       // return the value  -->3


//calling below expression before declaration
// console.log();(addTwo(5));      // will throw an error ------>  Cannot access 'addTwo' before initialization

//It is also normal function but sometimes it is known as expression.
const addTwo = function(num){
    return num +2;
} 
addTwo(5);      // return the value  -->7
