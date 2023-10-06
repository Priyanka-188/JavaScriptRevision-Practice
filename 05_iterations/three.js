// array specific loops

// ["","",""]      string in array
// [{},{},{}]       objects in array

//1) for of loop

const arr = [1,2,3,4,5,6,7];

for (const num of arr) {
    // console.log(num);
}

// for of on string

const greetings = "Hare Krishna!❤";
for (const greet of greetings) {
    // console.log(`$Each alphabet is ${greet}`);
}


// Map
// Map is a object data structure which contain value in key and pair just like objects
// Map contain unique key valye pair ,does not hold duplicates and
// it also remembers the order of the insertion

const map = new Map();

map.set('In','India');
map.set("UK", 'United Kingdom');
map.set('Fr','France');
map.set('In',"India");

// console.log(map);     //Map(3) { 'In' => 'India', Map(3) { 'In' => 'India', 'UK' => 'United Kingdom', 'Fr' => 'France' }'UK' => 'United Kingdom', 'Fr' => 'France' } -->it remove duplicates

for (const key of map) {
    // console.log(key);
}   /*  [ 'In', 'India' ]
        [ 'UK', 'United Kingdom' ]
        [ 'Fr', 'France' ] 
        */

// to print key and value seprately
for (const [key,value] of map) {
    console.log(key ,':-' ,value);
}  /*
        In :- India
        UK :- United Kingdom
        Fr :- France */

//does this for of loop work on object also?

const myobj = {
    'Radha':'Krishna',
    'Radhika':'Madhav'
}

for (const [key,value] of myobj) {
    console.log(key ,":-", value);       //myobj is not iterable
}

//so object is not iterable  using 'for of' loop, their are another way to iterate objects
// 'for of' loop works on arrays and map but not on object