// Игрок может перемещать персонажа с помощью кнопок и стрелок на клавиатуре.
// Персонаж не может заходить на стены и за границу игрового поля.
// Кнопки с направлениями, которые не доступны для персонажа, заблокированы.

const topology = document.querySelector(".topology");
const matrix = getGameMap(topology);

const PLAYER_NAME = "player";
const WALL = "wall";
const UP = "UP";
const DOWN = "DOWN";
const LEFT = "LEFT";
const RIGHT = "RIGHT";
const MAP_VALUE = "value";

const btnUp = initButton(UP);
const btnDown = initButton(DOWN);
const btnLeft = initButton(LEFT);
const btnRight = initButton(RIGHT);

initDisableButton(
  matrix,
  getPlayerCoordinates(topology).get("y"),
  getPlayerCoordinates(topology).get("x")
);

//mouseControlUnit(topology);

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", handler);
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode < 37 || e.keyCode > 40) return false;

  let key;

  switch (e.keyCode) {
    case 37:
      key = LEFT;
      break;

    case 38:
      key = UP;
      break;

    case 39:
      key = RIGHT;
      break;

    case 40:
      key = DOWN;
      break;
  }

  const playerX = getPlayerCoordinates(topology).get("x");
  const playerY = getPlayerCoordinates(topology).get("y");

  if (!initButton(key).disabled) {
    moveUnit(matrix, playerY, playerX, key);
    setView(topology, matrix);
    initDisableButton(
      matrix,
      getPlayerCoordinates(topology).get("y"),
      getPlayerCoordinates(topology).get("x")
    );
  }
});

function getGameMap(block) {
  const map = [];
  block.querySelectorAll("tr").forEach((tr, y) => {
    const row = [];
    tr.querySelectorAll("td").forEach((td, x) => {
      const cell = new Map();
      cell.set("y", y).set("x", x).set("value", td.className);
      row.push(cell);
    });
    map.push(row);
  });
  return map;
}

// function mouseControlUnit(block) {
//   block.querySelectorAll("tr").forEach((tr, y) => {
//     tr.querySelectorAll("td").forEach((td, x) => {
//       td.addEventListener("click", function (e) {
//         if (this.className === PLAYER_NAME || this.className === WALL) return;

//         const playerX = getPlayerCoordinates(topology).get("x");
//         const playerY = getPlayerCoordinates(topology).get("y");

//         if (
//           matrix[y][x - 1] === undefined ||
//           matrix[y][x + 1] === undefined ||
//           matrix[y + 1][x] === undefined ||
//           matrix[y - 1][x] === undefined ||
//           matrix[y][x - 1] !== undefined ||
//           matrix[y][x + 1] !== undefined ||
//           matrix[y + 1][x] !== undefined ||
//           matrix[y - 1][x] !== undefined
//         ) {
//           if (matrix[y][x - 1].get(MAP_VALUE) === PLAYER_NAME) {
//             matrix[y][x - 1].set(MAP_VALUE, "");
//             matrix[y][x].set(MAP_VALUE, PLAYER_NAME);
//           }
//           if (matrix[y][x + 1].get(MAP_VALUE) === PLAYER_NAME) {
//             matrix[y][x + 1].set(MAP_VALUE, "");
//             matrix[y][x].set(MAP_VALUE, PLAYER_NAME);
//           }
//           if (matrix[y - 1][x].get(MAP_VALUE) === PLAYER_NAME) {
//             matrix[y - 1][x].set(MAP_VALUE, "");
//             matrix[y][x].set(MAP_VALUE, PLAYER_NAME);
//           }
//           if (matrix[y + 1][x].get(MAP_VALUE) === PLAYER_NAME) {
//             matrix[y + 1][x].set(MAP_VALUE, "");
//             matrix[y][x].set(MAP_VALUE, PLAYER_NAME);
//           }
//         }

//         setView(topology, matrix);
//         initDisableButton(
//           matrix,
//           getPlayerCoordinates(topology).get("y"),
//           getPlayerCoordinates(topology).get("x")
//         );
//       });
//     });
//   });
// }

function getPlayerCoordinates(elem) {
  const coordinates = new Map();
  elem.querySelectorAll("tr").forEach((tr, y) => {
    tr.querySelectorAll("td").forEach((td, x) => {
      if (td.className === PLAYER_NAME) {
        coordinates.set("y", y);
        coordinates.set("x", x);
        coordinates.set("value", "player");
      }
    });
  });
  return coordinates;
}

function handler() {
  const playerX = getPlayerCoordinates(topology).get("x");
  const playerY = getPlayerCoordinates(topology).get("y");

  moveUnit(matrix, playerY, playerX, this.textContent);
  setView(topology, matrix);
  initDisableButton(
    matrix,
    getPlayerCoordinates(topology).get("y"),
    getPlayerCoordinates(topology).get("x")
  );
}

function initButton(value) {
  let button;
  document.querySelectorAll("button").forEach((btn) => {
    if (btn.textContent === value) button = btn;
  });
  return button;
}

function initDisableButton(arr, pY, pX) {
  if (arr[pY][pX - 1] === undefined || arr[pY][pX - 1].get("value") === WALL) {
    btnLeft.disabled = true;
  } else {
    btnLeft.disabled = false;
  }

  if (arr[pY][pX + 1] === undefined || arr[pY][pX + 1].get("value") === WALL) {
    btnRight.disabled = true;
  } else {
    btnRight.disabled = false;
  }

  if (arr[pY - 1] === undefined || arr[pY - 1][pX].get("value") === WALL) {
    btnUp.disabled = true;
  } else {
    btnUp.disabled = false;
  }

  if (arr[pY + 1] === undefined || arr[pY + 1][pX].get("value") === WALL) {
    btnDown.disabled = true;
  } else {
    btnDown.disabled = false;
  }
  return true;
}

function moveUnit(arr, pY, pX, movie) {
  arr[pY][pX].set(MAP_VALUE, "");
  if (movie === UP) arr[pY - 1][pX].set(MAP_VALUE, PLAYER_NAME);
  if (movie === DOWN) arr[pY + 1][pX].set(MAP_VALUE, PLAYER_NAME);
  if (movie === LEFT) arr[pY][pX - 1].set(MAP_VALUE, PLAYER_NAME);
  if (movie === RIGHT) arr[pY][pX + 1].set(MAP_VALUE, PLAYER_NAME);
  return arr;
}

function setView(elem, arr) {
  elem.querySelectorAll("tr").forEach((tr, y) => {
    tr.querySelectorAll("td").forEach((td, x) => {
      td.className = arr[y][x].get("value");
    });
  });
}
