const container = document.querySelector(".container");
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
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.className = "grid";
      row.appendChild(div);
    }
    container.appendChild(row);
  }
}

function changeColor() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      //color picker
      const colorPicker = document.getElementById("color-picker");
      const color = colorPicker.value;
      grid.style.background = color;
    });
  });
}

function gridReset() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.background = null;
  });
}
function main() {
  let size = +input();
  createGrid(size);
  changeColor();
}
//button clear
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  gridReset();
  container.textContent = "";
  //main();
  setTimeout(function () {
    main();
  }, 500);
});
main();
