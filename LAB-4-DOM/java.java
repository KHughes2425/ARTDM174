const go_btn = document.querySelector('.go-btn');
const go_btn2 = document.querySelector('.go-btn2');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');

//this toggles the existence of the mover1 class 
//to box1's class attribute.
go_btn.addEventListener('click', (e) => {
  box1.classList.toggle('mover1');
});

//this toggles the existence of the mover2 class 
//to box2's class attribute.
go_btn2.addEventListener('click', (e) => {
  box2.classList.toggle('mover2');
});