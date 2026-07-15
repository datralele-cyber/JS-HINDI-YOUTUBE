//  array 

// const myArr = [0,1,2,3,4,5,6,7,"Ishmeet",true ]
const myArr = [0,1,2,3,4,5,6,7,]
// console.log(myArr[1])// so the indexing takes places at the zero that common 


// Array Methods 
// myArr.push(6);
// myArr.push(7);
// myArr.pop();
 


// computer par load nahi aane dena hai hame 

// myArr.unshift(9) // it will replace al the elements in the array 
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()

// sclice and splice 


console.log(" A ", myArr)

const myn1 = myArr.slice(1 , 3)
 console.log(myn1);
 console.log("B ", myArr);

 

const myn2 = myArr.splice(1 , 3)
 console.log("C ", myArr);
console.log(myn2);