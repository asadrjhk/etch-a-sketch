const container = document.querySelector('.container');
const rgbBtn = document.querySelector('.rgb-color');
const blackBtn = document.querySelector('.black-color');
//16 x 16 grid
function input() {
  let size;
  size = prompt("Enter the size of the grid?");
  do {
    if (size > 100) {
      size = prompt("Size must be less than 100? try again?");
    }
  } while (size > 100);
  return size;
}

function createGrid(size) {
  if (size === 0 || !Number.isInteger(size)) {
    size = 16;
  }
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.className = "row";
    for (let j = 0; j < size; j++) {
      const div = document.createElement('div');
      div.className = "grid";
      row.appendChild(div);
    }
    container.appendChild(row);
  }
}
let isRgbBtnClicked = false;
let isBlackBtnClicked = false;
rgbBtn.addEventListener('click', () => {
  isRgbBtnClicked = true;
  isBlackBtnClicked = false;
});
blackBtn.addEventListener('click', () => {
  isBlackBtnClicked = true;
  isRgbBtnClicked = false;
})
function changeColor() {
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.addEventListener('mouseover', () => {
      color = "#000000";
      if (isRgbBtnClicked) {
         color = rgbColor(); 
      } else if (isBlackBtnClicked) {
        color = "#000000";
      }
      grid.style.background = `${color}`;
    })
  });
}

function gridReset() {
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.style.background = null;
  });
  isBlackBtnClicked = false;
  isRgbBtnClicked = false;
}
function rgbColor() {
 const r = Math.floor(Math.random() * 256);
 const g = Math.floor(Math.random() * 256);
 const b = Math.floor(Math.random() * 256);

 return "rgb(" + r + "," + g + "," + b + ")";
}
function main() {
  let size = +input();
  createGrid(size);
  changeColor();

}
//button clear
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  gridReset();
  container.textContent = "";
  setTimeout(function () { 
    main();
    },500);
})
main();

 