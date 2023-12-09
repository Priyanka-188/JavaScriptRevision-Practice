hoistedVariable = "Kridha";
console.log(hoistedVariable);
var hoistedVariable ;

hoisted();

function hoisted(){
    console.log("I am a hoisted function");
}

var hoisted1 = function(){
    console.log("I am an expression function using function operator ");
}
hoisted1();



//Hoisting in local scope
// doSomething();

function doSomething(){
    x=11;
    console.log(x);
    var x;
}
doSomething();



//variable declared using var can be initalised before declaration but in case of let ,it throws an error. 