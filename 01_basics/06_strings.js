const name = "Priyanka";
console.log(name);
let age = 22;

console.log("My name is "+name+" I am "+age+" years old");  //this is the old way of writing strings, its not recommended these days
console.log(`My name is ${name} and I am ${age} years old`); //new way of writing string

const myname = new String("Priyanka Saini from Globe");
console.log(myname);
console.log(myname[5]);
console.log(myname.__proto__);  //prints {}, means it is an object.

console.log(myname.charAt(10));
console.log(myname.concat(" Hello"));
console.log(myname.endsWith("Globe"));
console.log((myname.indexOf('G')));
console.log(myname.length);
console.log(name.concat(" Saini"));
console.log(myname.slice(0,21));

let smallStr = myname.substring(5,21);

console.log(smallStr);

const newStr = "     Kanha Kanha kab se pukaru     ";

console.log(newStr);
console.log(newStr.trimStart());
console.log(newStr.trim());

console.log(myname.split(" "));

const url = "https://thisispriyanka%200saini.com";

console.log(url);
console.log(url.replace("%200","#500"));

console.log(newStr.includes("Kanha"));
console.log(newStr.includes("  "));

