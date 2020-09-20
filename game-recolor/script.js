const parent = document.querySelector(".game__field");
const blockButtons = document.querySelector(".buttons__field");
const colors = [
  "yellow",
  "Orange",
  "red",
  "DeepPink",
  // "Maroon",
  // "Lime",
  // "Navy",
  // "Aqua",
];
const matrix = [];
let result = 0;
let countClick = 0;
let countResult = 0;

createTable(parent, 6, 6);
initialPaintingTable(parent, colors);
createButton(blockButtons, colors);

const table = document.querySelector("table");
const trs = table.querySelectorAll("tr");
const countBlock = document.querySelector(".count");

trs.forEach((tr, y) => {
  const row = [];
  const tds = tr.querySelectorAll("td");
  tds.forEach((td, x) => {
    const color = td.style.backgroundColor;
    row.push({ [color]: false });
    result += 1;
  });
  matrix.push(row);
});

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    countClick += 1;
    const previous = Object.keys(matrix[0][0])[0];
    const btnColor = btn.style.backgroundColor;
    matrix.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (Object.keys(cell)[0] === btnColor) {
          return;
        }
        if (y === 0 && x === 0) matrix[y][x] = { [btnColor]: true };
        changeElement(matrix, y, x - 1, previous, cell, btnColor, y, x);
        changeElement(matrix, y, x + 1, previous, cell, btnColor, y, x);
        changeElement(matrix, y - 1, x, previous, cell, btnColor, y, x);
        changeElement(matrix, y + 1, x, previous, cell, btnColor, y, x);
        Object.values(matrix[y][x])[0] && (countResult += 1);
      });
    });
    setView(matrix, trs);
    //getResult(matrix);
  });
});

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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setView(arr, row) {
  row.forEach((tr, y) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((td, x) => {
      td.style.backgroundColor = Object.keys(arr[y][x])[0];
      Object.keys(arr[y][y])[0] && (countResult += 1);
      console.log(countResult);
    });
  });
}

function changeElement(arr, y, x, prevValue, cell, newColor, modY, modX) {
  if (
    arr[y] !== undefined &&
    arr[y][x] !== undefined &&
    Object.keys(cell)[0] === prevValue &&
    Object.keys(arr[y][x])[0] === newColor &&
    Object.values(arr[y][x])[0]
  ) {
    arr[modY][modX] = { [newColor]: true };
  }
  return arr;
}

function getResult(arr, row) {
  const color = td.style.backgroundColor
  row.forEach((tr, y) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((td, x) => {
      if (color != Object.keys(matrix[0][0])[0])
      return;
      alert('ert')
      // td.style.backgroundColor = Object.keys(arr[y][x])[0];
      // Object.keys(arr[y][y])[0] && (countResult += 1);
      // console.log(countResult);
    });
  });
}
