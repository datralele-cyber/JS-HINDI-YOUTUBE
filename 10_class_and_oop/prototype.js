// let myName = "Ishmeet         "

// console.log(myName.truelength)
// console.log(myName.trim().length)// we waht this to be in default in all the string that is we dont went to write all this we waht to make it an method to acoid the repated work å


let myHeros = ["thor","spiderman "]
// making an object that is  

let heroPower = {
    thor : "hammer",
    spiderman: "sling ",

    getSpiderPower : function(){

        console.log(`Spidy Power is ${this.spiderman}`); 
    } 

}
Object.prototype.ishmeet= function (){

    console.log("Ishmeet is present in the all object   ")
}

// heroPower.ishmeet() 
 

// we can add that function in that but we can make an edit in the object sphere in the javascript example in the below thats it .


// myHeros.ishmeet()
// heroPower.ishmeet()

    
// myHeros.HeyIshmeet()
// heroPower.HeyIshmeet() 

// it does not have an acess to the Hey Ishmeet as it is notan array but all other arrays what we will create will be having an access .Thanks


//Inheritance


const User = {
    name : "chai",
    email : "chai@gmail.com "
}


const Teacher = { 
    makeVideo : true 

}

const TeachingAssistant = {
    isAvailable : false  
}
const TAsupport = {
  makeAssignment : 'Javascript Assignment ',
  areFullTime : 'true',    
  __proto__ : TeachingAssistant
}
 


Teacher.__proto__=User


Object.setPrototypeOf(TeachingAssistant,Teacher) // this is the other way to set the prototype of the object



let anotherUserNAme =  "Chai aur Ishmeet    "

String.prototype.trueLength = function () {
    // console.log(`${this}`);
    console.log(`${this.name}`);
 console.log(`True length is : ${this.trim().length}`); 

}
anotherUserNAme.trueLength();
"ishmeet".trueLength()
"chai hai ishmmet ".trueLength()