class User {
    constructor(username){
        this.username = username;
    }

    logIn(){
        console.log(`Username is ${this.username}`);
    }
}


//interiting Teacher class from User ..so we will  use 'extends' keyword.

class Teacher extends User{
    //over writing the constructor
    constructor(username,email,designation){
       
        super(username);  //  super keyword refer to constructor of parent class
        
        this.email = email;
        this.designation = designation;
    }


    addCourse(){
        console.log(`New course is added by ${this.username}`);
    }
}


const newTeacher = new Teacher("Hitesh",'hitesh@gmail.com','Teacher');

// console.log(chilnewTeacherdUser);


newTeacher.addCourse();     //New course is added by Hitesh

newTeacher.logIn();         //Username is Hitesh

console.log(newTeacher instanceof Teacher);        //true

console.log(newTeacher instanceof User);      //true