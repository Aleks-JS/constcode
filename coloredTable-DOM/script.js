const table = document.querySelector("table");
const trs = table.querySelectorAll("tr");
const OPTION_COLOR_ONE = "red";
const OPTION_COLOR_TWO = "green";
const OPTION_COLOR_THREE = "blue";

trs.forEach((tr, x) => {
  const tds = tr.querySelectorAll("td");
  const currentColumnCell = tr.querySelectorAll("td");
  tds.forEach((td, y) => {
    td.dataset.key = `${x}${y}`;
    td.addEventListener("click", () => {
      const currentColor = (td.className = changeColor(td.className));
      let xColor = currentColor;
      let i = x - 1;
      while (i > -1) {
        if (i !== trs.length) {
          const td = table.querySelector(`td[data-key="${i}${y}"]`);
          xColor = td.className = changeColor(xColor);
        } else {
          xColor = changeColor(xColor);
        }
        i--;
      }

      xColor = currentColor;
      i = x + 1;
      while (i < trs.length) {
        const td = table.querySelector(`td[data-key="${i}${y}"]`);
        xColor = td.className = changeColor(xColor);
        i++;
      }

      let yColor = currentColor;
      let j = y - 1;
      while (j > -1) {
        const td = table.querySelector(`td[data-key="${x}${j}"]`);
        yColor = td.className = changeColor(yColor);
        j--;
      }

      yColor = currentColor;
      j = y + 1;
      while (j < trs.length) {
        const td = table.querySelector(`td[data-key="${x}${j}"]`);
        yColor = td.className = changeColor(yColor);

        j++;
      }
    });
  });
});

function changeColor(color) {
  switch (color) {
    case OPTION_COLOR_ONE:
      color = OPTION_COLOR_TWO;
      break;
    case OPTION_COLOR_TWO:
      color = OPTION_COLOR_THREE;
      break;
    case OPTION_COLOR_THREE:
      color = OPTION_COLOR_ONE;
      break;
    default:
      color = OPTION_COLOR_ONE;
  }
  return color;
}
