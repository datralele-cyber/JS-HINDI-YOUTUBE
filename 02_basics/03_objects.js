// Singaleton



// objects literals 
// Object.create.      

const mySym = Symbol("Key1")
const JsUser  = {
    name : "Ishmeet",
    "Full Name " : "Ishmeet Singh Sodhi " ,
    [mySym] :"myKey1 ",
    age : 18 ,
    location : "Gwalior" ,
    E_mail : "ish@google.com" ,
    isLoggedIn : false ,
    lastLoginDays : ["Monday","Saturday"]



}
// console.log(JsUser.E_mail)
// console.log(JsUser["E_mail"])
// console.log(JsUser.isLoggedIn)
// console.log(JsUser["Full Name "])
// console.log(JsUser[mySym])




//  we can over wright the values in the object as followes 


JsUser.E_mail = "Ishmeet@Aunthropic.com"

//  We can also freez the object and tell that no one can change the value in the object that all thanks 
// Object.freeze(JsUser) 

//  so the changes will not be propogated further that's it thanks 
JsUser.E_mail = "Ishmeet@ChatGpt.com"
//  now Just Print that the change safter the freez of obj that is 
// console.log(JsUser) 
// console.log(JsUser.("Full Name")) we cannot acces the object data by this approach thanks 


//  now we cannot acces the name in the .Full Name format in the call option 
   JsUser.greeting = function() {


    console.log("Hello JsUser My Love ");
    
   }
   JsUser.greeting2 = function() {


    console.log(`Hello JsUser My Love,  ${this.name}`);
    
   }

   console.log(JsUser.greeting());
   console.log(JsUser.greeting2());



// now how to access the object 
// most people says like 
// console.log()(JsUser.isLoggedIn)
// Not considered as standere good in the coding space 

// we can acces the array in the only way but in the obj we can use key to acces it that is  .

// myArr = ["H","I"]
// myArr(0) && myArr(1)




// Please note that how do we access the object in different ways  so there may be dot . or [] this square brakit in the accessing of the object frequentily asked in the  interview 


