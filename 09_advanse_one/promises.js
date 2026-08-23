const promisOne = new Promise(function(resolve ,reject){
    // Do an async task 
    //DB calls ,criptography ,network 

    setTimeout( function () {
     console.log('Async task is complete ')
     resolve("")
    } ,1000 )
})

new Promise (function ( resolve , reject ) {
    setTimeout(function() {
    console.log("Async task 2 ")    
    })

}).then(function(){
    console.log("Async 2 resolve ")
})

// promis are created that is resolve and reject now we have to consume that promise 
promisOne.then(function(){
    console.log("Promise Consumed ");

})


const promiseThree = new Promise( function (resolve ,reject){
    setTimeout(function(){
 resolve ({username : "Chai Aur Code " , email : "Chai@gmailw.com"})
    },1000)
} )

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve ,reject){
    setTimeout(function(){
        let error = true 
        if(!error){
           resolve({username : "Hitesh " , password : " Q@123"}) 
        }else {
            reject('Error : Something is wrong ')
        }
        
    },1000)

})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("FInally the promise is either resolved or rejected "))

const promiseFive  = new Promise(function(resolve ,reject){
    setTimeout(function(){
        let error = true 
        if(!error){
           resolve({username : "javascript " , password : " df123"}) 
        }else {
            reject('Error : JS went wrong  ')
        }
        
    },1000);