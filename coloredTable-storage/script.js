const table = document.querySelector("table");
const trs = table.querySelectorAll("tr");
const collection = new Map(iterateTable(trs));
const colors = ["red", "green", "blue"];
let count = 0;

trs.forEach((tr, x) => {
  const tds = tr.querySelectorAll("td");
  tds.forEach((td, y) => {
    td.addEventListener("click", () => {
      const key = parseInt(`${x}${y}`);
      count = getCounter(colors.indexOf(collection.get(key)), 2);
      collection.set(key, colors[count]);

      let counter = count;
      let i = x + 1;
      while (i < 5 && collection.get(parseInt(`${i}${y}`))) {
        counter = getCounter(counter, 2);
        collection.set(parseInt(`${i}${y}`), colors[counter]);
        i++;
      }

      counter = count;
      i = x - 1;
      while (i + 1 > 0 && collection.get(parseInt(`${i}${y}`))) {
        counter = getCounter(counter, 2);
        collection.set(parseInt(`${i}${y}`), colors[counter]);
        i--;
      }

      counter = count;
      i = y + 1;
      while (i < 5 && collection.get(parseInt(`${x}${i}`))) {
        counter = getCounter(counter, 2);
        collection.set(parseInt(`${x}${i}`), colors[counter]);
        i++;
      }

      counter = count;
      i = y - 1;
      while (i + 1 > 0 && collection.get(parseInt(`${x}${i}`))) {
        counter = getCounter(counter, 2);
        collection.set(parseInt(`${x}${i}`), colors[counter]);
        i--;
      }

      setView(trs, collection);
    });
  });
});

function getCounter(count, max) {
  if (count === max) {
    return (count = 0);
  }
  ++count;
  return count;
}

function setView(elem, map) {
  elem.forEach((tr, x) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((td, y) => {
      const key = parseInt(`${x}${y}`);
      td.className = map.get(key);
    });
  });
}

function iterateTable(elem) {
  const arr = [];
  elem.forEach((tr, x) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((td, y) => {
      const key = `${x}${y}`;
      arr.push([parseInt(key), td.className]);
    });
  });
  return arr;
}
