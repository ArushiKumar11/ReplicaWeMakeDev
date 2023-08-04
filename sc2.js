const grid = document.querySelector('.grid');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const boxWidth = grid.firstElementChild.offsetWidth + 10; // Consider box width including margins
const visibleBoxes = Math.floor(grid.offsetWidth / boxWidth);
let scrollPosition = 0;

rightArrow.addEventListener('click', () => {
  const maxScrollPosition = boxWidth * (grid.childElementCount - visibleBoxes);
  scrollPosition += boxWidth * visibleBoxes;
  if (scrollPosition > maxScrollPosition) {
    scrollPosition = maxScrollPosition;
  }
  grid.style.transition = 'transform 1s';
  grid.style.transform = `translateX(-${scrollPosition}px)`;
});

leftArrow.addEventListener('click', () => {
  scrollPosition -= boxWidth * visibleBoxes;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  grid.style.transition = 'transform 1s';
  grid.style.transform = `translateX(-${scrollPosition}px)`;
});
