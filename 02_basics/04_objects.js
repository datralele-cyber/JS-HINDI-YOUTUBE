// Singelton Object Creation 
// const tinderUser = new Object()       this is singelton 
const tinderUser = {}        // this is 
// the above the ways to declare the object in the js thats it thanks 
 tinderUser.id = "123@abc"
 tinderUser.name = "Sammy"
 tinderUser.isloggedIn =  false 



// console.log(tinderUser);


const regularUser = {

    email: "Some@gmail.com",

    fullname :    {

        userFullname: {
            firstname :  "Ishmeet ",
            lastName : "Sodhi"
        }


    }

}

// console.log(regularUser.fullname?.userFullname.lastName);       // we can use the question mark if the vaue in the object does not exist 

//  we will work on the. merging of the objects  just like the concatnation of the arrays 



// const Obj1 = { 1 : "a" , 2: "b"}
// const Obj2 = { 3 : "c" , 4: "d"}
// // const Obj3 = {Obj1 , Obj2}
// // const newObj3 = Object.assign( {} ,Obj1 ,Obj2)
// const Obj3 = {...Obj1,...Obj2}
// console.log(Obj3);


// from the data base we git it by the following 



const User = [

    {
        id : 1 ,
        email : "IshmeetSinghSOdhi@gmail.com"
    },
    {
        name : "IshmeetSinghSodhi ",
        location : "Sagar Madhaya Pradesh"
    },
    {
        id : 1 ,
        email : "IshmeetSinghSOdhi@gmail.com"
    },
    {
        name : "IshmeetSinghSodhi ",
        location : "Sagar Madhaya Pradesh"
    },
    {
        id : 1 ,
        email : "IshmeetSinghSOdhi@gmail.com"
    },
    {
        name : "IshmeetSinghSodhi ",
        location : "Sagar Madhaya Pradesh"
    },
]
// User[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty ('isloggedIn'));
// console.log(tinderUser.hasOwnProperty ('islogged'));


//  learning the destructuring of the objects in the js 

const course = {
    courseName : "Learing Js Hindi " ,
    Price : "2000",
    courseInstructor : "Ishmeet"
}
// course.courseInstructor // completely correct but will be optimizing it for the syntx sugar 

const {courseInstructor  : Istructor } = course // {} - is for the destructuring in the objects  //  now after decelering it in this way can print it in the console log(courseInstructor) so here we go l'ii be showing it to you  thanks   && we can change the name of the course instructor to instructor that is 

// console.log(courseInstructor);
console.log(Istructor);


//  what is api and how it is called in the subcontext 
//   {
//     "name" : "Ishmeet " ,
//     "courseName" : "Js IN Hindi ",
//     "price" : "free"

//   }


// The API can be in the fromat of the array that contains objects within it contains keys and the data 

[
    {},
    {},
    {}


]