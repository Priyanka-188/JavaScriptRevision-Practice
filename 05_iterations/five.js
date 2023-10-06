const coding = ["js",'ruby','Java','python'];

coding.forEach(function (val){
    // console.log(val);    //this is a callback function
})

coding.forEach(val => {
    // console.log(val);   // arrow function as a callback function
});

//we can give a function as argument to forEach loop which is predeclared .

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe); //we have to give only the reference of the function



//forEach provides  access of index of element, value and whole array to each element
coding.forEach((item,index,arr) =>{
//     console.log(item, index, arr);
 })/**
js 0 [ 'js', 'ruby', 'Java', 'python' ]
ruby 1 [ 'js', 'ruby', 'Java', 'python' ]
Java 2 [ 'js', 'ruby', 'Java', 'python' ]
python 3 [ 'js', 'ruby', 'Java', 'python' ] */


//how to work with objects inside array,,, which is a common structure of a database

// defining an array of objects
// const obj = [{},{},{}]   --->syntax
//it is mostly used in databaes
const myCoding =[
    {
        languageName :"JavaScript",
        languageFileName : "js",
    },
    {
        languageName :"python",
        languageFileName : "py",
    },
    {
        languageName :"cpp",
        languageFileName : "c++",
    },
    {
        languageName :"ruby",
        languageFileName : "rb",
    }
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
// JavaScript
// python
// cpp
// ruby