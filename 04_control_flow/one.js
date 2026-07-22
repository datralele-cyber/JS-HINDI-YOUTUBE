// // if 


// if(true) {
//     console.log("If condition is true then the block will get an access thats it ")
// }
// if (false ) { // if the condetion is false then the block will not be getting the access of that scope thanks hitesh sir for the guidence of the right full learing of the practical learning .
//     console.log( " if the given argument is false then we will access this scope ")
    
// }


// const is_user_is_logged_in = false 
// const temperature = 41 

// if (is_user_is_logged_in) {

//     console.log("The user is logged in the system thaks for yor concern malik ")
    
// }



//  // >,<,=>,<= ,==,===,!== 


//  if (2!==3) {

//     console.log("executed")
    
//  }
//  if (temperature < 50)  {  
//     console.log("temperature less than 50 ")
    
//  }

//  console.log("the temerature is above the 50 degrees thanks ")



// const score = 200



// if(score >100) {
//     const power = "fly"
//     console.log(`user power : ${ power}`)
// }


// console.log(`user power : ${ power}`)


//  short hand notation 
// if  (balance > 500)  console.log("test"),console.log("test 2 ");  this is called as the implicit scope  in the javascript as its executes in the singel line  and multiple line as the comma and that is not an good habit 


// nesting 

// const balance = 1000
// if (balance < 500 ) {
//     console.log("less than ") ;
    
// } else if (balance < 750){
//     console.log("less than 750");
    

// } else if (balance <900  ){
// console.log("less than 750");

// }else{console.log("less than 1200" );

// }



const userLoggedIn = true 
const debtCard = true
const loggedInFromGoogle = false
const loggedInFromMail = false



if (userLoggedIn && debtCard && 2 == 3 ) {
    console.log("Allow to purchse the course ");
    
}


if(loggedInFromGoogle || loggedInFromMail) {
    console.log("user logged in ")
} else{
   console.log ("user is not logged in ");
}