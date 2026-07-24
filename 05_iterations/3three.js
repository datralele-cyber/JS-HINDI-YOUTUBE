// for of       // loop is an array specific loop 

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,6,7]


for (const num of arr) {
    //console.log(num);
    
}
const greeting = "Hello world "
for (const greet of greeting ) {
    // console.log(`Each Char is ${greet}`)
    // console.log(greet)
}

//  map 

const map = new Map() // map is used  for the display of the uniques values 
map.set("IN" , "INDIA")
map.set("IN" , "INDIA")
map.set("IN" , "INDIA")
map.set("Fr" , "France")
map.set("USA" , "United States of America")
// console.log(map);


for (const [key , value] of map) {
    // console.log(key , ":- " ,value);
    
}


const myObject = {
    "game1 " : "One8X",
    "game2 " : "One45",
    "game3" : "One8989"

}
for (const [key , value] of myObject) {
 console.log(key , ":- " ,value);
    
}