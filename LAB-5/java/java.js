function autoSlide(){
  setInterval(() =>{
    slide(getItemActiveIndex() + 1);
  }, 1000);
}

function slide(toIndex){
  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemsActive = document.querySelector(".carousel_item_active");

  if (toIndex > itemsArray.length){
    toIndex = 0;
  }
}

const newItemsActive = itemsArray[toIndex];

newItemsActive.classList.add("carousel_item_pos_next");
setTimerout(() => {
  newItemActive.classList.add("carousel_item_pos_next");
  itemActive.classList.add("carousel_item_pos_next");
}, 20);

function getItemActiveIndex(){
  const itemsArray = Array.from(document,querySelectorAll(".carousel_item"));
  const itemActive = document.querySelector(".carousel_item_active");
  const itemActiveIndex = itemsArray.indexOf(itemActive);
  return itemsActiveIndex;
}