// Today's Date is 20 septemper 2026  11:30 24hrs IST 

// class User{
//     constructor (email,password){
//         this.email=email;
//         this.password = password
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//     this._password = value.toUpperCase()  // MAxixum call stack excedeed that is an important error in the major size  
//     }
class User{
    constructor (email,password){
        this.email = email;
        this.password = password;
    }
    // get password(){
    //     return this._password.toUpperCase()
    // }
    get email (){
        return this._email.toUpperCase()
         
    }
    set email (value){
        return this._email = value 
    }

 

    get password(){
        return `${this._password}ishmeet` // that is indeed gives the getter that the password with the name i have said give at the end 
    }
    set password(value){
    this._password = value  // what it does that the password is setup the only the user has set it but the people who want to see it gets an Uppercse of that password 
       
    }
}


// const Ishmeet = new User ("ish@gmail.com","455")
const Ishmeet = new User ("ish@gmail.com","absc")
console.log(Ishmeet.password);
console.log(Ishmeet.email);
