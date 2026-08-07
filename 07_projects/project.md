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

``` Javascript 

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();

},);


```

## Project 4 
``` Javascript 

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```


## Project 5 
```Java Script //just the collect the inputs that are given to windows
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'colcour' >
  <table s>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space ' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  
  </div>`;
});

```


## Project 6 
```Java Script 
// generate the random colour using the HEX code 
//which will eventually change the background colour 
const random_colour = function (){
  const hex = "01234566789ABCDEF"
  let colour = '#'
  for( let i = 0; i < 6 ; i++){
    colour += hex[(Math.floor(Math.random() *16))]
  };
  return colour 
};

let intervalId;
const start_bg_change = function (){
 if(!intervalId){
  intervalId = setInterval(start_change,1000);
 }




  function start_change(){
    document.body.style.backgroundColor = random_colour();
  }
};


const stop_bg_change = function(){
  clearInterval(intervalId);
  intervalId = null ; 
};

document.querySelector('#start').addEventListener('click',start_bg_change);
document.querySelector('#stop').addEventListener('click',stop_bg_change);

// const stop_bg_change = document.getElementById("clicked")

});

```
# Abhi To Itna Hiiiii Thankss.......