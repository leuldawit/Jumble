// import { WORDS } from "./words.js";

var submit = document.getElementById('submit');
var win = document.getElementById('win');
var help = document.getElementById('help');
var close = document.getElementById('close');

// some of the 5 leter words copied from words.js
const WORDS = [
    'cried', 
     'check',
    'floor',
    'begin',
    'woman',
    'alone',
    'plane',
    'spell',
    'watch',
    'carry',
    'wrote',
    'clear',
    'named',
    'books',
    'child',
    'glass',
    'human',
    'takes',
    'party',
    'build',
    'seems',
    'blood',
    'sides',
    'seven',
    'mouth',
    'solve',
    'north',
    'value',
]
// randomly select a word from the WORDS array in WORDS.js
var word = WORDS[Math.floor(Math.random() * WORDS.length)]; 
var answer = word.split('');
var pos = 1;

$('#submit').click(function() {
  var textarea = document.getElementById('text').value;
  var text = textarea.split('');
  
  // chceks if the word really exists or not
  if(WORDS.includes(textarea)){  
    
     if (pos > 25) {
        win.textContent = 'game over!';
        win.style.display = 'inline-block';
      } else {
        text.forEach(t => {
          var label = document.getElementById(pos);
          label.textContent = t;
          pos++;
          answer.forEach(a => {
            if (answer.includes(t) && answer.indexOf(t) != text.indexOf(t)) {
              label.style.backgroundColor = '#c9b458';
            } else if (answer.indexOf(t) == text.indexOf(t)) {
              label.style.backgroundColor = '#6aaa64';
            } else if (answer.indexOf(t) == -1) {
              label.style.backgroundColor = '#787c7e';
            }
          });
        });
      }
      if (word === textarea) {
        win.textContent = 'You Won!';
        win.style.display = 'inline-block';

        const text = document.getElementById('text');
        text.parentNode.removeChild(text);
        submit.parentNode.removeChild(submit);
      }
  }
  else{
    alert('Error: Invalid Word! Please Enter a valid word!')
  }
});

$('#help').click(function() {
  var inst = document.querySelector('.instructions');
  inst.style.height = '50vh';
});

$('#close').click(function() {
  var inst = document.querySelector('.instructions');
  inst.style.height = '0vh';
});

$('#restart').click(function() {
  // Refresh the page
  location.reload();
});

