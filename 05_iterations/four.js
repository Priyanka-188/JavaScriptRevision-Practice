// how to iterate over objects --we can iterate over objects using 'for in' loop

const myobj = {
    js : "JavaScript",
    py : "Python",
    cpp : "C++"
}

// for (const key in myobj) {
//    console.log(key);   //js
//                        //py
//                        //cpp
// }

// for (const key in myobj) {
//     console.log(myobj[key]); //JavaScript
//                              // Python
//                              // C++
// }

for (const key in myobj) {
    // console.log(`${key} is shortcut for ${myobj[key]}`);
}/**js is shortcut for JavaScript
    py is shortcut for Python
    cpp is shortcut for C++ */


//check if this 'for in' loop works on array or not ?

const arr = ["py",'ruby','Js','cpp'];

// for (const val in arr) {
//     console.log(val);  // 0 1 2  3      ----> it prints it indesx/keys of array not the value
// }

for (const val in arr) {
    // console.log(arr[val]);      //py  ruby  Js  cpp
}


//Does forin loop work on MAP

const map = new Map();

map.set('In','India');
map.set("UK", 'United Kingdom');
map.set('Fr','France');
map.set('In',"India");

for (const key in map) {
    console.log(key);    //prints nothing because Maps are not iterable like this
}

//'for in' loop works properly on objects and 'for of' loops works properly on arrays