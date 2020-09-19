const table = document.querySelector("table");
const trs = table.querySelectorAll("tr");
const colors = ["red", "green", "blue"];
const STORAGE_KEY_NAME = "ColoredTable";
let count = 0;
let matrix = {};

if (localStorage.getItem(STORAGE_KEY_NAME)) {
  matrix = getDataBase(STORAGE_KEY_NAME);
  setView(trs, matrix);
}

trs.forEach((tr, x) => {
  const tds = tr.querySelectorAll("td");
  tds.forEach((td, y) => {
    const key = `${x}${y}`;
    let content = td.className;

    if (!matrix.hasOwnProperty(key)) {
      changeToDatabase(matrix, key, content);
    }

    td.addEventListener("click", () => {
      count = getCounter(colors.indexOf(td.className), 2);
      matrix[key] = colors[count];

      let counter = count;
      let i = x + 1;
      while (i < 5 && matrix[`${i}${y}`]) {
        counter = getCounter(counter, 2);
        matrix[`${i}${y}`] = colors[counter];
        i++;
      }

      counter = count;
      i = x - 1;
      while (i + 1 > 0 && matrix[`${i}${y}`]) {
        counter = getCounter(counter, 2);
        matrix[`${i}${y}`] = colors[counter];
        i--;
      }

      counter = count;
      i = y + 1;
      while (i < 5 && matrix[`${x}${i}`]) {
        counter = getCounter(counter, 2);
        matrix[`${x}${i}`] = colors[counter];
        i++;
      }

      counter = count;
      i = y - 1;
      while (i + 1 > 0 && matrix[`${x}${i}`]) {
        counter = getCounter(counter, 2);
        matrix[`${x}${i}`] = colors[counter];
        i--;
      }

      setView(trs, matrix);
      setDataBase(STORAGE_KEY_NAME, matrix);
    });
  });
});

function changeToDatabase(data, key, value) {
  data[key] = value;
  return data;
}

function setDataBase(keyStorage, data) {
  localStorage.setItem(keyStorage, JSON.stringify(data));
}

function getDataBase(keyStorage) {
  if (!localStorage.getItem(keyStorage)) {
    setDataBase(keyStorage);
  }

  const database = JSON.parse(localStorage.getItem(keyStorage));
  return database;
}

function setView(row, data) {
  row.forEach((tr, y) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((td, x) => {
      const key = `${y}${x}`;
      td.className = data[key];
    });
  });
}

function getCounter(count, max) {
  if (count === max) {
    return (count = 0);
  }
  count += 1;
  return count;
}
