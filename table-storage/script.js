const table = document.querySelector("table");
const trs = table.querySelectorAll("tr");
let collection;

trs.forEach((tr, y) => {
  const tds = tr.querySelectorAll("td");
  tds.forEach((td, x) => {
    td.addEventListener("click", () => {
      initApp(trs, y, x, collection);
    });
  });
});

function createCollection(selector) {
  const collection = new Map();
  selector.forEach((tr, y) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((td, x) => {
      collection.set(`${y}${x}`, parseInt(td.innerText));
    });
  });
  return collection;
}

function increaseCounter(map, key, iter) {
  if (map.get(key) !== undefined) map.set(key, map.get(key) + iter);
  return map;
}

function changeValue(row, y, x, map) {
  row.forEach((tr, y) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((td, x) => {
      td.textContent = map.get(`${y}${x}`);
    });
  });
}

function initApp(row, y, x, map) {
  if (!map) map = createCollection(row);
  increaseCounter(map, `${y}${x}`, 2);
  increaseCounter(map, `${y - 1}${x}`, 1);
  increaseCounter(map, `${y + 1}${x}`, 1);
  increaseCounter(map, `${y}${x - 1}`, 1);
  increaseCounter(map, `${y}${x + 1}`, 1);
  changeValue(row, y, x, map);
}
