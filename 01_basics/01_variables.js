const accountId = 144553
let accountEmail = "Ishmeet@google.com"
var accountPassword ="12345"
accountCity = "Gwalior"

//  accountId = 2  // not allowed 

accountEmail = "hahasd@gj.com"
accountPassword = "1212121212122"
accountCity = "Bengaluru"
let accountState;


console.log(accountId)


/*
preffer not to use var 
because of issue in block scope and functional scope 

*/

console.table([accountId , accountEmail, accountPassword, accountCity, accountState])