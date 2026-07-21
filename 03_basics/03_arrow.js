const user = {
    username: "Ishmeet ",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to the website `)
        // console.log(this);
        

    }
}


// user.welcomeMessage()
// user.username = "Dharminder Pradhan "
// user.welcomeMessage()
// console.log(this);   //in the browser it goes like this console.log(this)
// VM195:1 Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// function chai(){
//     let username = "Ishmeet "
//     console.log(this.username);   // if this is accessed insiede of the function bolck scope // Undefined 
//     // it will not inside of the function 
// }
// chai()
// const chai = function () {
//     let username = "Ishmeet "
//     console.log(this.username);
    
// }



// const chai =   () => {
//     let username = "Ishmeet "
//     console.log(this.username);
    
// }

// chai()


// const addtwo = (num1 ,num2 ) => { // basic arrow functions 
//     return num1 + num2   // this is an explicit return whic is used in the curly brackets 
// }



// const addTwo= (num1 ,num2 ) =>  num1 + num2     // this is called as the implicite return 


// const addTwo= (num1 ,num2 ) =>  (num1 + num2 )  // if the operation we are performing is in the curly bracket then we have to use the return keyword else in the parenthesis there would be no return used help ful in the react and that is called the explicit return  

const addTwo = (num1 ,num2 ) => ({ username: "Dharminder "})            // object return karna hai 

console.log(addTwo( 3 ,6 ))




// const myArray = [2,5,6,78,9]

// myArray.forEach ()