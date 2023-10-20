class User{
    constructor(email,password){
        //here only email is set using contructor , password is  over written by getter and setter functions
        this.email = email; 
        this.password = password;
    }

    //getter and setter are used to provide abstraction 
    get password(){
        return `${this._password}@abc`;
    }

    set password(value){
        this._password = value;
    }

}

const newUser = new User("Vrinda@gmail.com", "12345");
console.log(newUser.password);             //12345@abc

console.log(newUser.email);             //Vrinda@gmail.com