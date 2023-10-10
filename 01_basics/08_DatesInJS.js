//DATE

const myDate = new Date();
// console.log(myDate);            //2023-10-10T09:52:55.773Z

// console.log(myDate.getDate());       //10

// console.log(myDate.toLocaleString());        //10/10/2023, 9:53:52 AM
// console.log(myDate.toDateString());            //Tue Oct 10 2023

// console.log(myDate.toString());                 //Tue Oct 10 2023 09:54:57 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString());              //2023-10-10T09:54:57.641Z
// console.log(myDate.toJSON());                       //2023-10-10T09:55:53.750Z
// console.log(myDate.toLocaleDateString());           //10/10/2023
// console.log(myDate.toLocaleString());               // 10/10/2023, 9:55:53 AM
// console.log(myDate.toLocaleTimeString());               // 9:57:14 AM
// console.log(myDate.toTimeString());                 //09:57:14 GMT+0000 (Coordinated Universal Time)


//******* CREATING CUSTOM DATES ************


let createdDate = new Date("11-30-2001");
// console.log(createdDate.toLocaleString());          //11/30/2001, 12:00:00 AM
// console.log((createdDate.toDateString()));          // Fri Nov 30 2001


//************ MY TIMESTAMP ***********

let myTimeStamp = Date.now();
// console.log(myTimeStamp);               //1696931975169

// // to convert timestamp into seconds
// console.log(Math.floor(Date.now()/1000));   //1696932100
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);              //10
console.log(newDate.getDay());                  //2  -->as today is tuesday


// console.log(`${newDate.getDate()} is today's date`);


// // .toLocaleString() function can be used to define custom values of dates.
// newDate.toLocaleString('default',{
//     weekday:'long',
// })
