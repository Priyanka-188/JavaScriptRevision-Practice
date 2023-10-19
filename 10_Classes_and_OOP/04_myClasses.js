
// class User{
//     constructor(username, password, age){
//         this.username = username;
//         this.password = password;
//         this.age = age;
//     }

//     encryptPassword(){
//         return `${this.password}@RK`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }


//here the 'new' keyword will first create an empty object , this empty object is known as instance.
const newUser = new User("Kridha", "123",345);
// console.log(newUser);       //User { username: 'Kridha', password: '123', age: 345 } 

// console.log(newUser.encryptPassword());      //123@RK
// console.log(newUser.changeUsername());       // KRIDHA





///****** Behind the scene ***********/
// We can perform the  same activity using functions which we have performed using classes 
function User(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
}

User.prototype.encryptPassword = function(){
    return `${this.password}`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}


const user2 = new User("Priyanka",'Pri@2121',22);
// console.log(user2);     //User { username: 'Priyanka', password: 'Pri@2121', age: 22 }


console.log(user2.encryptPassword());          //Pri@2121

console.log(user2.changeUsername());            //PRIYANKA