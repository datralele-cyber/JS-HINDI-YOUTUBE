// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = "march" // if the value we are searching for is string then make the case one as the value but make sure the case that is uppercase and lower case 

switch (month) {
    case "jan": 
    console.log("January ") ;  
        break;
    case "feb": 
    console.log("February ") ;  
        break;
    case "march": 
    console.log("march ") ;  
        break;
    case "april": 
    console.log("April  ") ;  
        break;

    default: // all the code is been executed if the value is been found yes below but exliding the default 
        console.log("default case match");
        break;
}