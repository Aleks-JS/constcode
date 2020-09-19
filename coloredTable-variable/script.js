const table = document.querySelector("table");
const trs = table.querySelectorAll("tr");
const OPTION_COLOR_ONE = "red";
const OPTION_COLOR_TWO = "green";
const OPTION_COLOR_THREE = "blue";
let matrix = [];

trs.forEach((tr, x) => {
  const tds = tr.querySelectorAll("td");
  matrix.push([]);
  tds.forEach((td, y) => {
    matrix[x].push(td.className);

    td.addEventListener("click", () => {
      const currentColor = (matrix[x][y] = changeColor(matrix[x][y]));

      let i = x - 1;
      let convertibleСolor = currentColor;
      do {
        if (matrix[i] && matrix[i][y] !== undefined) {
          matrix[i][y] = changeColor(convertibleСolor);
          convertibleСolor = changeColor(convertibleСolor);
          i--;
        }
      } while (i + 1 > 0);

      convertibleСolor = currentColor;
      i = x + 1
      do {
        if (matrix[i] && matrix[i][y] !== undefined) {
          matrix[i][y] = changeColor(convertibleСolor);
          convertibleСolor = changeColor(convertibleСolor);
          i++;
        }
      } while (i < matrix.length);

      convertibleСolor = currentColor;
      i = y - 1
      do {
        if (matrix[x][i] !== undefined) {
          matrix[x][i] = changeColor(convertibleСolor);
          convertibleСolor = changeColor(convertibleСolor);
          i--;
        }
      } while (i + 1 > 0);

      convertibleСolor = currentColor;
      i = y + 1
      do {
        if (matrix[x][i] !== undefined) {
          matrix[x][i] = changeColor(convertibleСolor);
          convertibleСolor = changeColor(convertibleСolor);
          i++;
        }
      } while (i < matrix.length);

      trs.forEach((tr, x) => {
        const tds = tr.querySelectorAll("td");
        tds.forEach((td, y) => {
          td.className = matrix[x][y];
        });
      });
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
