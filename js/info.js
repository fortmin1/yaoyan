function change() {
 const smallImg = document.querySelector('.left_one img');
 const count = document.querySelector('.count');
 const bigImg = document.querySelector('.slider img');
 const popWindow = document.querySelector('.pop-window');
 const close = document.querySelector('.close');
 const leftBtu = document.querySelector('.left-button');
 const rightBtu = document.querySelector('.right-button');
 let currentIndex = 1;
 let maxIndex = 5;
smallImg.addEventListener('click',() => {
 popWindow.style.display = 'block';
})
close.addEventListener('click',() => {
 popWindow.style.display = 'none';
})
 leftBtu.addEventListener('click',() => {
  currentIndex = (currentIndex - 1 + maxIndex) % maxIndex || maxIndex;
  count.innerText = `${currentIndex}/${maxIndex}`;
  if (currentIndex === 1) {
   bigImg.src = smallImg.src = `../imgs/little_nav.png`;
  } else {
   bigImg.src = smallImg.src = `../imgs/little_nav${currentIndex}.jpg`;
  }
 })
 rightBtu.addEventListener('click',() => {
  currentIndex = (currentIndex % maxIndex) + 1;
  count.innerText = `${currentIndex}/${maxIndex}`;
  if (currentIndex === 1) {
   bigImg.src = smallImg.src = `../imgs/little_nav.png`;
  } else {
   bigImg.src = smallImg.src = `../imgs/little_nav${currentIndex}.jpg`;
  }
 })
}
window.onload = () => {
 change()
}