// Immeditaly Invoked Function Expression (IIFE)

(function chai (){
    console.log(`DB CONNECTED `);       // this is an named iife  as the function has the name chai 
})()  ; // this is use if the iife to execute an any function in nearly no time without getting it pollotion from the global scope variable pollution  the we us the iife  



// ( function chai (){
//     console.log(`DB CONNECTED 2`);
// })();
( (name) => {
    console.log(`DB CONNECTED 2 `)
}) ("ISHMEET")