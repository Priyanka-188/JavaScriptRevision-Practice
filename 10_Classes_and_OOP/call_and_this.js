function setUser(username){
    this.username = username;
}

function createUser(username, address, age){

    setUser.call(this,username);      //call function will pass the execution context of creatUser to setUser through 'this' keyword.
    
    this.address = address;
    this.age = age;
}

const myUser = new createUser("Kridha", "Baikunth","infinite");
console.log(myUser);              //createUser { username: 'Kridha', address: 'Baikunth', age: 'infinite' }  


