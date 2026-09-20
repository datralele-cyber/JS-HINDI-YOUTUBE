const User =  {
_email : 'chai@gmail.com',
_password :'chai@pass78' ,


get email() {
 return this._email.toUpperCase()
},

set email(value) {
   this._password = value 
}


}


//  what is the factory function that is object create will be usingh in the later sense 


const tea = Object.create(User)
console.log(chai._email)