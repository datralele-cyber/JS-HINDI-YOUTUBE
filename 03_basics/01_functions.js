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
    let result = number1 + number2
    return result
    console.log("Ishmeet") // if we write any code below the result we are printing then the code is always unreachible. forever  in that space 
}

const result = addTwoNumbers(3 , 5 )

console.log("Result : " ,result)
