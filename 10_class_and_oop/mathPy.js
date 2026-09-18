const descriptor =Object.getOwnPropertyDescriptor(Math , 'PI')


// console.log(descriptor)

// console.log(Math.PI );
// Math.PI = 5 
// console.log(Math.PI)




// const mynewObject = Object.create(null) 


const chai = {
    username : 'ginger tea ',
    price : '250',
    isAvailable : true ,

    orderChai : function (){ console.log("code fat gaya VALUES NAI AAYI that is Chai nahi bani ")}   // we want the key vaues  
}
console.log(Object.getOwnPropertyDescriptor(chai, "username"));


Object.defineProperty(chai , "username",{
  //writable: false,
  enumerable: true,  
} )

console.log(Object.getOwnPropertyDescriptor(chai, "username"));



for (const  [key ,value ] of Object.entries(chai)) {

    if (typeof  value !== 'function') {
      console.log(`${key} : ${value }`)  
    }  
}



// TO get an better hold of the above project we really need to build an scalable systems in depth and in much more trapped problen th his scean so we can get hold of the above context and sorry for being verbose that is form side good to see you 