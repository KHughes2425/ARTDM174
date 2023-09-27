
const baseURL = 'https://assets.codepen.io/2538893/';
const nxt = document.querySelector('.nxt');
const slide = document.querySelector('.pic');
const cars = ['car1.jpg', 'car2.jpg', 'car3.jpg', 'car4.jpg'];
let index = 1;

nxt.onclick = function(e) {
  e.preventDefault();
  
  slide.src = baseURL + cars[index];
  index = index + 1;
  console.log(index);

  //write a conditional so that the images wrap back to the beginning image.
  if(index >= cars.length) {
    index = 0;
  }
};

//Add a previous button event listener