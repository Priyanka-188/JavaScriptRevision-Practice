//DATE

const myDate = new Date();
console.log(myDate);

console.log(myDate.getDate());

console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

//CREATING CUSTOM DATES

let createdDate = new Date("11-30-2001");
console.log(createdDate.toLocaleString());
console.log((createdDate.toDateString()));


//MY TIMESTAMP
let myTimeStamp = Date.now();
console.log(myTimeStamp);

// to convert timestamp into seconds
console.log(Math.floor(Date.now()/1000));
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


console.log(`${newDate.getDate()} is today's date`);


// .toLocaleString() function can be used to define custom values of dates.
newDate.toLocaleString('default',{
    weekday:'long',
})
