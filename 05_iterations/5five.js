const coding = [ "js","ruby ","python ","java","cpp "]
// coding.forEach( function  (value ) { // function is inside the array so ti will not have an name 
//     console.log(value);
    
// }) // call back function dont have an name and it is array so it will visit each element in an array 


// coding.forEach( (item )=> {
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item)
// }


// coding.forEach(printMe());


coding.forEach( (item ,index ,array )=> {  // so the in line function can access the item ,index and array as the wholenot hole bare with mu spelling mistakes 
    // console.log(item);
    // console.log(index);
    // console.log(array);
    //console.log(index ,item ,array);

})



const myCoding = [ 
{
 languageName : "javascript ",
    languagefilename : "js"},
  {

    languageName : "java ",
    languagefilename : "jv"},
{

    languageName : "python ",
    languagefilename : "py"
}]
 


 myCoding.forEach((item,index,arr)=> {
    console.log((item.languageName ));
    // console.log((item.languageName && item.languagefilename));
    // console.log(index);
    // console.log(arr);
 })



 // the following in line functions are also known as the call back functions thats it for this 5 five .js file for now thanks .