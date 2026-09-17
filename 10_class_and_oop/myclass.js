//ES^6 ke baad wala js ke uper mai kaaam kar raha hu to classes hai but uski functioning mere ko maloom hai kese hoti hai
// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());



// Bhinde the seen the working of class in early days 

 function User(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password; 

}

User.prototype.encryptPassword = function(){
    return`${this.password}abc`
}  
User.prototype.changeUsername = function(){
    return`${this.username.toUpperCase( )}`
}  

const tea = new User("tea","tea@gmail.com","tea67")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());