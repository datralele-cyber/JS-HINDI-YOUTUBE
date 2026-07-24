// 
// const coding = [ "js","ruby ","python ","java","cpp "]

//    const values =  coding.forEach((item)=> {
//         // console.log(item)
//         return item 
//     }) // that is that it is havingan call back loop 

// console.log(values);



const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return num  > 4
// });   //basics of the filters 
// console.log(newNums);

// const newNums = []
//  myNums.forEach((num)=> {
//     if (num > 4) {
//         newNums.push(num);
//         console.log(`the number added to the array is ${num}`) // just an complimentry code from ishmeet 
        
//     }
// })
// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter ((bk ) =>  bk.genre === "History")
let userBooks = books.filter ((bk )=> {
     return bk.publish >=1995 && bk.genre === "History"
})   // the scope is open then the return is indeed inportant for the elements to be printed in the output that's thanks my love 



  console.log(userBooks)