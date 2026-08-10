const promisOne = new Promise(function(resolve ,reject){
    // Do an async task 
    //DB calls ,criptography ,network 

    setTimeout( function () {
     console.log('Async task is complete ')
     resolve("")
    } ,1000 )
})

// promis are created that is resolve and reject now we have to consume that promise 
promisOne.then(function(){
    console.log("Promise Consumed ");
})