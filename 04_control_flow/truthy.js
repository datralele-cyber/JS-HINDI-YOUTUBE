const userEmail =  ""  // "Iishmeet@ .ai" 

if (userEmail) {
    console.log("Got users  e mail ");
}else{
   console.log("Don't have an official  email");
}


// false values in the js 

// false ,0 ,-0 , BigInt 0n, "" , undefined,NaN



// truthy values 
//"0" , " false " , "", [ ]. { }, function ()  
if (userEmail.length === 0) {
    console.log ("Array is INDIA")
    
}


const emptyObj  = {}
if(Object.keys (emptyObj).length === 0) {
 console.log("object is empty ");
}



// Nullish Coalescing operator (??) : null and undefined values 


let val1;


// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15  // the first  valid value is been assigned and rest ase been left as the valid first data is been feched 

console.log(val1);


//  turnerary operator 


// condition ? true : false


const iceTeaprice =  100 


iceTeaprice  <=  80 ? console.log("less than 80 ") : console.log("more than 80 ")