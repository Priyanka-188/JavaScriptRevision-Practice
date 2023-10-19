class User{
    constructor(username){
        this.username = username;
    }

    logIn(){
        console.log(`Username: ${this.username}`);
    }

    //static method is used wheb we want any child class or object to access the particular method.
    static createId(){
        return `123`;
    }

    //the above createId function can not be accessed outside, hence is providing abstraction
}


const newUser = new User("Kridha");
// newUser.logIn();            //Username: Kridha

// console.log(newUser.createId());  //will thow an error as creatId is a static function and we are  trying to access it outside of class   //newUser.createId is not a function


class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }

}

const newTeacher = new Teacher("Priyanka",'priyanka@gmail.com')

newTeacher.logIn();        //Priyanka
newTeacher.createId();  // will thow an error becauuse of Static keyword