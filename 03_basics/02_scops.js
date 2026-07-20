// the story start with the let var const 

// let a = 10. // this is the global scope 
// const b = 20
// var c = 30

// {} //scope in every programming language 


// var c = 300

let a = 200 ;




if(true) {

let a = 10
const b = 20
var c = 30 // it is available outside of the scope "IN GLOBAL SCOPE " that is not right so we will not use or avoid using the var in the mordern ontext of the coding in the javascript and the problem still exist if we declare the variable in the scope with the plane c in the context scope space that is the block scope and the values should not go outside of the block sope to the global scope . thanks  
// console.log("INNER : " , a  );

}

//  console.log(a);
// console.log(b);
// console.log(c);
//  the sore scope is differen in the IDE  through "node" and on the browser is different w'll be learning it on the later end .



function one (){
    const username = " ISHMEET"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);


    two()
    
}

// one()

if(true){
    const  username = "Ishmeet "
    if(username === "Ishmeet "){

        const website = " Youtube "

        // console.log(username + website);
        

    }
    // console.log(website)

}

// console.log(username);





// +++++++++++++++++++++++++++++. Instresting ++++++++++++++++++++++++++



console.log(addone(5));
function addone(num){        // this is call the function as one and as the whole 
    return num + 1

}

// addone(5)

console.log(addTwo(5));          //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num){   // this is also called the expression some times 
    return num + 2
}
//addTwo(5)
// these are the two ways we can make the function that can be make in the javascript 