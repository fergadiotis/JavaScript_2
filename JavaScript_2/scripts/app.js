
let choiceDiv = document.querySelector('#choiceDiv');
let rankedList = document.querySelector('#rankedList');

let movies = [
  'Gladiator',
  'The Matrix',
  'Shawshank Redemption',
  'American Beauty'
];
let actors = [
  'Scarlett Johansson',
  'Tom Cruise',
  'Leanardo DiCapprio',
  'Vin Diesel'
];
let directors = [
  'Christopher Nolan',
  'Steven Speilberg',
  'George Lucas',
  'Quentin Tarintino'
];
// called a function Clears all buttons and listed values,
// effectively resetting the interface.
function clearAll() {
  choiceDiv.innerHTML = '';
  rankedList.innerHTML = '';
}

function setCategory(sel) {
  clearAll();
  // called a function to clear all buttons 
  // AND clear all listed values like a RESET
  switch (sel) {
    case '1': // movies
      for(let i = 0; i < movies.length; i++) {
        let button = document.createElement('button');
        button.setAttribute('class', 'choiceButton');
        button.setAttribute('type', 'button');
        button.setAttribute('value', i);
        button.setAttribute('onclick', 'choice(this.textContent, this.value);');
        button.textContent = movies[i];
        choiceDiv.appendChild(button);

      }
      break;
    case '2': // actors
        // completed this code
      for (let i = 0; i < actors.length; i++) {
        let button = document.createElement('button');
        button.setAttribute('class', 'choiceButton');
        button.setAttribute('type', 'button');
        button.setAttribute('value', i);
        button.setAttribute('onclick', 'choice(this.textContent, this.value);');
        button.textContent = actors[i];
        choiceDiv.appendChild(button);
      }
      break;
    case '3': // directors  
        // completed this code
      for (let i = 0; i < directors.length; i++) {
        let button = document.createElement('button');
        button.setAttribute('class', 'choiceButton');
        button.setAttribute('type', 'button');
        button.setAttribute('value', i);
        button.setAttribute('onclick', 'choice(this.textContent, this.value);');
        button.textContent = directors[i];
        choiceDiv.appendChild(button);
      }
      break;
  } // switch
} // setCategory()

function choice(val, idx) {
  let buttons = document.querySelectorAll('.choiceButton, .disabled');
  buttons[idx].setAttribute('disabled', '');
  buttons[idx].setAttribute('class', 'disabled');
  console.log(`choice text: ${val} index: ${idx}`);
  addTolist(val);
}

  // called a function that will add that selected
  // item to a NUMBERED/ORDERED LIST on the right side(output div)
  // choice()
function addTolist(item) {
  let li = document.createElement('li');
  li.textContent = item;
  rankedList.appendChild(li);
}