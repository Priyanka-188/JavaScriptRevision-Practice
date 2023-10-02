// In JS objects can be created by two ways
//1)  as literals             ----> No singleton created
//2)  as constructors         ----> singleton is created 
//   Object.create    (as constructor)

//When we define object as literal , no singleton is formed

const mySymbol = Symbol("key1");     //creating a symbol datatype variable
// OBJECT LITERALS
const employee ={
    name : "Priyanka",
    "full name": "Priyanka Saini",
    age : 22,
    [mySymbol] : "mole on the chin",
    email : "sainipriyanka1722001@gmail.com",
    isEmployed : false,
    workDays :["Moday", "Tuesday","Friday"]
}
//2 ways to access object values
// console.log(employee.age);         //22      //Not a good way to access
// console.log(employee["age"]);      //22      //good way

// console.log(employee["full name"]);      //----> this full name  can only be accessed using 2nd method there is no way to access using first method , it will give error.
// console.log(employee[mySymbol]);           //mole on the chin        --->accessing symbol value of object
// console.log(typeof employee);        //object


// CHANGING/OVERRIDING THE VALUE OF OBJECT KEYS
employee.isEmployed = true;
// console.log(employee);  
 /*object{
                                name: 'Priyanka',
                                'full name': 'Priyanka Saini',
                                age: 22,
                                email: 'sainipriyanka1722001@gmail.com',
                                isEmployed: true,
                                workDays: [ 'Moday', 'Tuesday', 'Friday' ],
                                [Symbol(key1)]: 'mole on the chin'
                        } */

//If you want that no one can change the key values of object, you can freeze the object
// Object.freeze(employee);
employee.age = 34;      //It will not change the value as the object is freezed in previous line
// console.log(employee["age"]);   //22


//adding a function as value in the object
employee.greeting = function(){
    console.log("Hello I am your friend");
}

employee.greeting2= function(){
    console.log(`Hello I am your friend ${this.name}` );
}

// console.log(employee.greeting);      //undefined

console.log(employee.greeting());        //Hello I am your friend
console.log(employee.greeting2());       //Hello I am your friend Priyanka