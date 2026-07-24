// 

const myNums = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
// const newNums = myNums.map( (num) => num + 10 );

const newNums = myNums
            .map((num) => num * 10)
            .map ((num)=> num + 1 ). // this is called as the chaining that is it will be carring the operation performed in the previous .map to the next and we can do it indefnately and this itself called as the chaining 
            filter((num) => num >= 40)
console.log(newNums)