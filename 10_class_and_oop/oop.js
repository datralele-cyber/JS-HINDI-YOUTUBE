 const user = { //. Object literal  that initially contains the propertis and methods 
    username : "Ishmeet Singh Sodhi ",
    logInCount :10,
    loggenIn : true,

    getUserDetails: function (){
        // console.log ("Got the user details from the datatbase") 
        // console.log(`Username : ${this.username}`)
        console.log(this)
    }
 };

//  console.log(user.username);
//  console.log(user.getUserDetails());
// console.log(this)


// const promiseOne = new Promise()
// const date = new Date()

function User(username ,loginCount ,isLoggedIn ){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this

}


const userOne  = new  User("Ishmeet" ,8 , true )
const userTwo = new User ("Hitesh " , 22 , false)
console.log(userOne.constructor);
// console.log(userTwo);


console.log("Ishmeet") //to make an check code for it to run it in the codespace  terminal  
//node 10_class_and_oop/oop.js