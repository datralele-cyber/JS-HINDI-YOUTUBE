# Project Rleated to DOM 


## project link 
[Ishmeet Screen Changer option with basic browser events // "Click Here " ](https://stackblitz.com/edit/dom-project-chaiaurcode-vddiqfhc?file=1-colorChanger%2Fchaiaurcode.js)



# Solution Code 

## Project One 

``` Javascript 
console.log("Ishmeet Singh Sodhi")console.log("Ishmeet Singh")
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'coral') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```


##  Project No 2 
that is on the BMI Calculator 

```   Javascript 
const form = document.querySelector('form')
// this use case will give me the empty value 
// const height =  parseInt(document.querySelector('#height').value)
form.addEventListener('submit' , function (e){

  e.preventDefault()

  const height =  parseInt(document.querySelector('#height').value)
  const weight =  parseInt(document.querySelector('#weight').value)
  const results  = document.querySelector('#results')

  if(weight === '' || weight< 0 || isNaN(weight)){
    results.innerHTML = `please give an valid height${height},my friend MF `;
  }else if(height === '' || height< 0 || isNaN(height)){
    results.innerHTML = `please give an valid height${height},my friend MF `;
  }else {
   const BMI = (weight / ((height*height)/10000)).toFixed(2)
  //   show inner results 
  results.innerHTML = `<span>${BMI}</span>`
  }
})
```
## Project No.3 
That is on the laocal time string and the carry on function that is to run the program till an specified time that it . 

```Javascript 
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();

},);


```

# Abhi To Itna Hiiiii.......