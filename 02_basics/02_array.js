const hotDrinks = ['tea','coffee','milk','greentea'];
const coldDrinks = ['maaza', 'coldcoffee','coke'];

// hotDrinks.push(coldDrinks);//push does not concatenate two arrays

// console.log(hotDrinks);
/**[
  'tea',
  'coffee',
  'milk',
  'greentea',
  [ 'maaza', 'coldcoffee', 'coke' ]
] */
// console.log(coldDrinks);  //[ 'maaza', 'coldcoffee', 'coke' ]




//There are two methods to combine 2 arrays
// 1st method
const drinks = hotDrinks.concat(coldDrinks);       //concat() does not manipulate original arrays , it returns a new array after combining the 2 arrays
console.log(drinks);          //[ 'tea', 'coffee', 'milk', 'greentea', 'maaza', 'coldcoffee', 'coke' ]

// 2 method
const beverages = ['water','mineral water']
const drinks1= [...hotDrinks, ...coldDrinks, ...beverages];      //we can combine as many arrays as we want using this method of assinging 3 dots before aray name .
console.log((drinks1));  //[ 'tea','coffee', 'milk', 'greentea', 'maaza', 'coldcoffee', 'coke', 'water', 'mineral water' ]




// /////////        SOME OTHER METHODS  ////////////////
const newArr = [1,2,4,11,[2,56,22,1],[0,3,[34,63]]];

const flat_newArr = newArr.flat(Infinity);    //returns a flat array
console.log(flat_newArr);          //[1,  2, 4, 11, 2,56, 22, 1,  0, 3,34, 63]



console.log(Array.isArray("Priyanka"));         //false
console.log((Array.from("Priyanka")));          /**[
    'P', 'r', 'i',
    'y', 'a', 'n',
    'k', 'a'
  ] */
  console.log(Array.from({Name:"Kanhaji"}));    //[]   //empty array

  let score1 = 100;
  let score2 = 200;
  let score3 = 300;
  let name = "Mohan";
  console.log(Array.of(score1,score2,score3,name));      //[ 100, 200, 300, 'Mohan' ]
