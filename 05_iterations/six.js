const coding = ["js","Ruby","python",'Cpp'];

// what  if we want to store values in a variable using forEach loop

const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

// console.log(values);    //undefined   --> forEach doesnot return values


//  so to overcome the aboce problem , we use filter method as it  return values

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num)=>num > 4)  //implicit return //filter take a call back function 
// console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ] 

//but when we use scope {} in arrow function we have to return values explicitely
const newNums = myNums.filter((num)=>{
    return num>4;
})

// console.log(newNums);   //[ 5, 6, 7, 8, 9, 10 ]



//how to work in real word on databases
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter((bk )=> bk.genre ==="History");
//   console.log(userbooks);
/**                         [
                                {
                                title: 'Book Three',
                                genre: 'History',
                                publish: 1999,
                                edition: 2007
                                },
                                {
                                title: 'Book Seven',
                                genre: 'History',
                                publish: 1986,
                                edition: 1996
                                }
                            ] */

userbooks = books.filter( (bk)=>{
    return bk.publish>=1995 && bk.genre ==="History";  
})
// console.log(userbooks); //  [
                        //     {
                        //     title: 'Book Three',
                        //     genre: 'History',
                        //     publish: 1999,
                        //     edition: 2007
                        //     }
                        //  ]
            
userbooks = books.filter( (bk)=>{
    return (bk.edition>=2014  || bk.genre =="Science") && bk.publish >2009;
})
console.log(userbooks); 
                        //  [
                        //     {
                        //       title: 'Book Eight',
                        //       genre: 'Science',
                        //       publish: 2011,
                        //       edition: 2016
                        //     }
                        //   ]