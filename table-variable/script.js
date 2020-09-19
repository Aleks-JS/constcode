const trs = document.querySelectorAll("tr");
let matrix = [];

trs.forEach((tr, y) => {
  const row = [];
  const tds = tr.querySelectorAll("td");
  tds.forEach((td, x) => {
    row[x] = parseInt(td.textContent);
    td.addEventListener("click", () => initApp(trs, y, x, matrix));
  });
  matrix[y] = row;
});

function initApp(row, y, x, arr) {
  increase(arr, y, x, 2);
  increase(arr, y - 1, x, 1);
  increase(arr, y + 1, x, 1);
  increase(arr, y, x - 1, 1);
  increase(arr, y, x + 1, 1);
  changeValue(row, y, x, arr);
}

function increase(arr, y, x, amountChange) {
  if (arr[y] && arr[y][x] !== undefined) {
    return (arr[y][x] += amountChange);
  }
}

function changeValue(row, y, x, arr) {
  row.forEach((tr, y) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((td, x) => {
      td.textContent = arr[y][x];
    });
  });
}
