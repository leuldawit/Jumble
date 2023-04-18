  import { WORDS } from './words.js';

  var submit = document.getElementById('submit');
  var win = document.getElementById('win');
  var help = document.getElementById('help');
  var close = document.getElementById('close');

  var word =getRandomItem(WORDS);
  var answer = word.split('');
  var pos = 1;

  console.log(word);

  var textarea = document.getElementById('text')
  textarea.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
      event.preventDefault();
      submit.dispatchEvent(new Event('click'));
    }
  })

  $('#submit').click(function() {
    var textarea = document.getElementById('text').value.toLowerCase();
    var text = textarea.split('');
    win.style.display='none'
    
    // checks if the word really exists or not
    if(WORDS.includes(textarea)){  
      
      if (pos > 25) {
          win.textContent = 'game over!';
          win.style.display = 'inline-block';
          const text = document.getElementById('text');
          text.parentNode.removeChild(text);
          submit.parentNode.removeChild(submit);

        } else {
          text.forEach((t, index) => {
            var label = document.getElementById(pos);
            label.textContent = t;
            pos++;
            if (answer[index] === t) {
              label.style.backgroundColor = '#6aaa64';// to display green 
            } else if (answer.includes(t)) {
              label.style.backgroundColor = '#c9b458';// to display yellow 
            } else {
              label.style.backgroundColor = '#787c7e';// to display grey 
            }
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
    else if(document.getElementById('text').value.trim()==='') {
      win.textContent='please enter a word';
      win.style.display = 'inline-block';
       }
       else if(document.getElementById('text').value.length!=5) {
        win.textContent='please enter 5 letter word';
        win.style.display = 'inline-block';
         }

    else{
          win.textContent = 'Error: Invalid Word! Please Enter a valid word!';
          win.style.display = 'inline-block';
    }
  });

  $('#help').click(function() {
    var inst = document.querySelector('.instructions');
    inst.style.height = '60vh';
  });

  $('#close').click(function() {
    var inst = document.querySelector('.instructions');
    inst.style.height = '0vh';
  });

  $('#restart').click(function() {
    // Refresh the page
    location.reload();
  });

  function getRandomItem(WORDS) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * WORDS.length);

    // get random item
    const item = WORDS[randomIndex];

    return item;
  }

