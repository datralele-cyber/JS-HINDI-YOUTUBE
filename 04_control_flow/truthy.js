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