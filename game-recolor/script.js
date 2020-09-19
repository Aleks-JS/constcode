const parent = document.querySelector(".game__field");
const blockButtons = document.querySelector(".buttons__field");
const colors = [
  "yellow",
  "Orange",
  "red",
  "DeepPink",
  "Maroon",
  "Lime",
  "Navy",
  "Aqua",
];
const result = [];
const matrix = [];
let count = 0;

createTable(parent, 6, 6);
initialPaintingTable(parent, colors);
createButton(blockButtons, colors);

const table = document.querySelector("table");
const trs = table.querySelectorAll("tr");
const countBlock = document.querySelector(".count");
console.log(countBlock);

trs.forEach((tr, y) => {
  const rowMatrix = [];
  const rowResult = [];
  const tds = tr.querySelectorAll("td");
  tds.forEach((td, x) => {
    const color = td.style.backgroundColor;
    rowMatrix.push(color);
  });
  matrix.push(rowMatrix);
  result.push(rowResult);
});

let previous = matrix[0][0];
console.log(previous);

console.log(matrix);

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnColor = btn.style.backgroundColor;
    matrix.forEach((row, y) => {
      row.forEach((color, x) => {
        const previous = matrix[0][0];
        matrix[0][0] = btnColor;

      });
    });
    setView(matrix, trs);
  });
});

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     count++;
//     countBlock.textContent = `Вы нажали ${count} раз`
//     const color = e.target.style.backgroundColor;
//     result.forEach((i) => {
//       const arrX = i.x;
//       const arrY = i.y;
//       const changeCell = document.querySelector(
//         `[data-x="${arrX}"][data-y="${arrY}"]`
//       );
//       changeCell.style.backgroundColor = color;
//       trs.forEach((tr, x) => {
//         const tds = tr.querySelectorAll("td");
//         tds.forEach((td, y) => {
//           const cellX = td.dataset.x;
//           const cellY = td.dataset.y;
//           const cellColor = td.style.backgroundColor;
//           if (
//             cellX == parseInt(arrX) + 1 &&
//             cellY == parseInt(arrY) &&
//             cellColor === color
//           ) {
//             const cell = { x: cellX, y: cellY };
//             result.push(cell);
//           }
//           if (
//             cellX == parseInt(arrX) - 1 &&
//             cellY == parseInt(arrY) &&
//             cellColor === color
//           ) {
//             const cell = { x: cellX, y: cellY };
//             result.push(cell);

//           }
//           if (
//             cellX == parseInt(arrX) &&
//             cellY == parseInt(arrY) + 1 &&
//             cellColor === color
//           ) {
//             const cell = { x: cellX, y: cellY };
//             result.push(cell);

//           }
//           if (
//             cellX == parseInt(arrX) &&
//             cellY == parseInt(arrY) - 1 &&
//             cellColor === color
//           ) {
//             const cell = { x: cellX, y: cellY };
//             result.push(cell);

//           }
//         });
//       });
//     });
//   });
// });

function getColor() {
  return this.style.backgroundColor;
}

function createTable(parent, row, col) {
  const table = document.createElement("table");
  for (let i = 0; i < row; i++) {
    const tr = document.createElement("tr");
    for (let i = 0; i < col; i++) {
      const td = document.createElement("td");
      tr.append(td);
    }
    table.append(tr);
  }
  parent.append(table);
}

function createButton(parent, colorList) {
  for (i = 0; i < colorList.length; i++) {
    const button = document.createElement("button");
    button.setAttribute.color = colorList[i];
    button.style.backgroundColor = colorList[i];
    parent.append(button);
  }
}

function initialPaintingTable(table, arr) {
  const trs = table.querySelectorAll("tr");
  trs.forEach((tr, x) => {
    tr.querySelectorAll("td").forEach((td) => {
      td.style.backgroundColor =
        arr[getRandomIntInclusive(0, colors.length - 1)];
    });
  });
}

function initResult(arrResult, value, y, x) {
  if (!arrResult[y][x]) {
    arrResult[y].push(value);
  }
  return true;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setView(arr, row) {
  row.forEach((tr, y) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((td, x) => {
      td.style.backgroundColor = arr[y][x];
    });
  });
}
