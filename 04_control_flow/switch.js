// switch


// Syntax:-
// switch(key){
//     case value:

//         break;

//     case value:

//         break;
    
//     default:
//         break;
// }

let month= 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("No case matched");
        break;
}
//March

//if we don't use break keyword , then if a case matches then the whole code after that case will execute "except default"

//for string values
month = "Feb"

switch (month) {
    case "Jan":
        console.log("Janurary");
        break;
    case "Feb":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    default:
        console.log("NO case matched");
        break;
}
//February