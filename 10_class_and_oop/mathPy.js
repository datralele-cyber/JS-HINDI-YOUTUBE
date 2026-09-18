const descriptor =Object.getOwnPropertyDescriptor(Math , 'PI')


// console.log(descriptor)

// console.log(Math.PI );
// Math.PI = 5 
// console.log(Math.PI)




// const mynewObject = Object.create(null) 


const chai = {
    username : 'ginger tea ',
    price : '250',
    isAvailable : true 
}
console.log(Object.getOwnPropertyDescriptor(chai, "username"));


Object.defineProperty(chai , "username",{
  writable: false,
  enumerable: false,  
} )

console.log(Object.getOwnPropertyDescriptor(chai, "username"));