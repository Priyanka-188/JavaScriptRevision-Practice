//objects using constructor or as singleton
const tinderUser = new Object()

// console.log(tinderUser);    //{}  -->empty object

//adding key and values in object
tinderUser.id = "234tfet3";
tinderUser.name = "Kavi";
tinderUser.email = "kavi245@tinder.com";
tinderUser.isSingle = true;

// console.log(tinderUser);

//nested object
const newUser = {
    email:'lovy@gmail.com',
    fullname: {
        userfullname:{
            firstname : "Priyanka",
            lastname : "Saini"
        }
    }
}

console.log(newUser.fullname);      //{ userfullname: { firstname: 'Priyanka', lastname: 'Saini' } }
console.log(newUser.fullname.userfullname);   //{ firstname: 'Priyanka', lastname: 'Saini' }
console.log(newUser.fullname.userfullname.firstname);    //Priyanka



//How to merge two objects

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c" , 4: "d"}
const obj3 = {5 : "e", 6 : "f"}

//way 1 ------>wrong way
const obj4 = {obj1 , obj2 , obj3};      // gives same problem as array not merge properly
// console.log(obj4);
/**{
    obj1: { '1': 'a', '2': 'b' },
    obj2: { '3': 'c', '4': 'd' },
    obj3: { '5': 'e', '6': 'f' }
  } */


  //way2  ------> correct way
  const obj5 = Object.assign({},obj1,obj2,obj3);         //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//   console.log(obj5);

  //way3 -------->most commonly used   ------->spread operator (...)
  const obj6 = {...obj1, ...obj2,...obj3}
  console.log(obj6);     //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }



  //  how we get values from database

  const users = [
    {
        name: "Priya",
        id : "146@rf"
    },
    {
        name: "Gaurav",
        id : "dfe2&dd"
    },
    {
        name: "Sachin",
        id :"sacg@55"
    },
    {
        name: "Ankit",
        id : "ank@34"
    }
  ]

  //acces values from above database syntax
  console.log(users[2].name);     //Sachin


// Some more methods

console.log(tinderUser);


//return an array of all the keys ....further we can perform all the array operations on this resultant array
console.log(Object.keys(tinderUser));   //[ 'id', 'name', 'email', 'isSingle' ]     

//return an array of all the values ....further we can perform all the array operations on this resultant array
console.log(Object.values(tinderUser));     //[ '234tfet3', 'Kavi', 'kavi245@tinder.com', true ]


console.log(Object.entries(tinderUser));   //return array inside array
/**[
  [ 'id', '234tfet3' ],
  [ 'name', 'Kavi' ],
  [ 'email', 'kavi245@tinder.com' ],
  [ 'isSingle', true ]
] */

console.log(tinderUser.hasOwnProperty('isSingle'));  //true

//we can see more methods of object from console
