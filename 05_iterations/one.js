// for loop at most import in any programming loop in any language 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number ")
    }
    // console.log(element)
    
}




// console.log(i = 0 ); // we will not be able to access as it is inside the of the scope  

for (let i = 1; i <= 10 ;i++) {
    // console.log(`outer loob value : ${i}`)
    for (let j = 1; j <= 10 ; j++) {
         //console.log(`Inner loop value : ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = '+ i * j );
        
        
    }
    
    
}

let myArray = ["flash ","batman ", "superman "]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) { // then the 4 th value is undefined as the indexed  value sis not present in the array or the element in that array is not present 
    const element = myArray[index];
    // console.log(element)
    
}

// control C is used for the termination of the code that is been exucuted for stopping in an not good event full manner that's it thanks   
    

// break and continue


// for (let index = 1; index <=20; index++) {
//     if (index == 5 ) {
//         console.log(`The Number ${index} is found and the process is terminated thanks with love `) // or ("5 is detected the the process of iteration of the array btw ishmeet is always verbose in nature ")
//         break
        
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <=20; index++) {
    if (index == 5 ) {
        console.log(`The Number ${index} is found and we will bo continueing the process of that `) 
        continue
        
    }
    console.log(`value of i is ${index}`);
    

}