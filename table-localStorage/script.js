const table = document.querySelector("table");
const clearButton = document.querySelector("button");
const trs = table.querySelectorAll("tr");

for (let y = 0; y < trs.length; y++) {
  const tds = trs[y].querySelectorAll("td");
  for (let x = 0; x < tds.length; x++) {
    const key = `${y}${x}`;
    const content = parseInt(tds[x].textContent);
    if (!localStorage.getItem(key))
      localStorage.setItem(`${key}`, `${content}`);

    tds[x].textContent = localStorage.getItem(`${key}`, `${content}`);

    tds[x].addEventListener("click", () => {
      increaseCounter(y, x, 2);
      increaseCounter(y - 1, x, 1);
      increaseCounter(y + 1, x, 1);
      increaseCounter(y, x - 1, 1);
      increaseCounter(y, x + 1, 1);
      setView(trs, y, x);
    });

    clearButton.addEventListener("click", () => {
      localStorage.setItem(`${key}`, "0");
      setView(trs, y, x);
    });
    tds[x].textContent = localStorage.getItem(`${key}`);
  }
}

function increaseCounter(y, x, iter) {
  const key = `${y}${x}`;
  if (localStorage.getItem(key)) {
    const value = parseInt(localStorage.getItem(key)) + iter;
    localStorage.setItem(key, `${value}`);
  }
}

function setView(row, y, x) {
  row.forEach((tr, y) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((td, x) => {
      const key = `${y}${x}`;
      td.textContent = localStorage.getItem(key);
    });
  });
}
