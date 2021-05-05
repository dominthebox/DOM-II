// Your code goes here


// Navigation links manipulation

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

// nav.addEventListener('blur', (event) => {
//     event.target.style.background = '';
//   }, true);

  nav.addEventListener('click', (event) => {
      event.preventDefault();
  })

// Text headers manipulation 

// const magText = document.querySelectorAll('h2');

// magText.addEventListener('resize', (event) => {
//     event.target.style.fontSize = "2.2rem";
// });
// magText.addEventListener('resize', (event) => {
//     event.target.style.fontSize = "1.6rem";
// })
// Images manipulation


// Wheel event 

document.addEventListener('wheel', (event) => {
    console.log(`${event} was activated`)
})