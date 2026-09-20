// Today's Date is 20 septemper 2026  11:30 24hrs IST 

class User{
    constructor (email,password){
        this.email=email;
        this.password = password
    }
    get password(){
        return this.password.toUpperCase()
    }
    set password(value){
    this.password = value.toUpperCase()  // MAxixum call stack excedeed that is an important error in the major size  
    }
}


const Ishmeet = new User ("ish@gmail.com","455")
console.log(Ishmeet.password);
