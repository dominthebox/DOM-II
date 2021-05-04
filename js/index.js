// Your code goes here

const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', (event) => {
    event.target.style.color = 'coral';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

nav.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
}, true);

nav.addEventListener('blur', (event) => {
    event.target.style.background = '';
  }, true);