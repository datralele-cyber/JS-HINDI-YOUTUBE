// console.log("I")
// console.log("S")
// console.log("H")
// console.log("M")
// console.log("E")
// console.log("E")
// console.log("T")



function  sayMyName () {
    console.log("I")
console.log("S")
console.log("H")
console.log("M")
console.log("E")
console.log("E")
console.log("T")


}

// sayMyName() // for execution 
// sayMyName // for the reference of that the function is in the file thats it 


function addTwoNumbers(number1 ,number2 ) { //  the values we are giving it that we called as the parameter even if it's an sring or boolean or number 
    console.log(number1 + number2)
}

//  addTwoNumbers() // we havnt given it the number in the first stance that we really neeed to but in. (the numbers that we have not entered that is arguments )
//   addTwoNumbers( 3 ,5 )// 8 // the input in the functions is call the arguments and 
//  addTwoNumbers( 3 ,"5")// 8
//  addTwoNumbers( 3 ,"a")// 8  
//  addTwoNumbers( 3 ,null )// 8  


function addTwoNumbers(number1 ,number2 ) { 
    // let result = number1 + number2
    // return result 
    return number1+number2
}

const result = addTwoNumbers(3 , 5 )

// console.log("Result : " ,result)
// function addTwoNumbers(number1 ,number2 ) { 
//     let result = number1 + number2
//     console.log("Ishmeet") // if we write any code below the result we are printing then the code is always unreachible. forever  in that space 

//     return result
//     console.log("Ishmeet") // if we write any code below the result we are printing then the code is always unreachible. forever  in that space 
// }

// const result = addTwoNumbers(3 , 5 )

// console.log("Result : " ,result)


function loginUserMessage (username = "sam" ) {
    if(username === undefined ){     //we can use  the (!username)
        console.log("Please enter a username ")
        return

    }
    return `${username} just logged in `

}
// console.log(loginUserMessage("Ishmeet Singh Sodhi "))
// console.log(loginUserMessage()) // if we dont give and argument in the function 


function calculateCartPrice( val1,val2,...num1) {
    return num1
}

// console.log(calculateCartPrice(200,300,400,2000))

const user = {
    username: "Ishmeet Singh Sodhi",
    price : 299       // problem arises when the price in the function and in this object prices the diff of the s that gives us the undefined in the name of the price 
    //username is Ishmeet Singh Sodhi and price is undefined


}



function handelObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handelObject(user);
// we can pass that directily we will be woking on it .
handelObject({
    username : "santosh",
    price : 3499
}) // username is santosh and price is 3499.  the. result of the function we can directily pass the values in the function 


// se we have just passed onjects that is like   # const user = {name : "sam ", price : 3499} in the function    
// now we will pass the arrays as we recives many data in the forms in the array 



const MyNewArray = [20,400,350,567,4000]


function returnSecondValue (getArray){
    return getArray [2] // if we are using the MyNewArray plz make sure you dont place = like getArray in the return as "return getArray = [2]" as it will result give 2 and not print index element of the called or passed array values thanks 

}
// console.log(returnSecondValue(MyNewArray)); // by placing the array in the variable or 
console.log(returnSecondValue([2200,500,1000,4000])); // or by directily placin the array in the function by placing all the values  
