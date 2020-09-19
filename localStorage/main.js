/*Вывод всех данных, сохраненных на текущей станице
// localStorage.length - количество элементов в хранилище
for (let i = 0, length = localStorage.length; i < length; i++) {
  // localStorage.key(i) - получение ключа элемента по его индексу
console.log('Ключ: ' + localStorage.key(i) + "; Значение: " + localStorage.getItem(localStorage.key(i)))
}
*/
//-----------------------------------------------------------------
/*

for (let i = 1; i < 4; i++) {
  const btn = document.querySelector(`[data-button="btn${i}"]`);
  const span = document.querySelector("span");
  console.log(btn);

  // Если есть хранилище с индексом, то выводим значение этого индекса на кнопку
  if (localStorage.getItem(i)) {
    const value = parseInt(localStorage.getItem(i));
    btn.textContent = `На меня нажали ${value} раз`;
  }
  // Создаем хранилище, если его нет
  if (!localStorage.getItem("+5+10")) {
    localStorage.setItem(
      "+5+10",
      JSON.stringify({
        btn1: 0,
        btn2: 0,
        btn3: 0,
      })
    );
  }

  // Создаем объект с методом подсчета общего счетчика
  let dataBase = JSON.parse(localStorage.getItem("+5+10"));

  Object.defineProperty(dataBase, "total", {
    get() {
      return this.btn1 + this.btn2 + this.btn3;
    },
  });

  const btns = document.querySelectorAll("button[data-button]");

  if (dataBase.total === 10) {
    btns.forEach((btn) => (btn.disabled = true));
  }

  const clearBtn = document.querySelector("[data-clear]");

  clearBtn.addEventListener("click", function () {
    localStorage.clear();
    localStorage.setItem(
      "+5+10",
      JSON.stringify({
        btn1: 0,
        btn2: 0,
        btn3: 0,
      })
    );
    dataBase = JSON.parse(localStorage.getItem("+5+10"));
    Object.defineProperty(dataBase, "total", {
      get() {
        return this.btn1 + this.btn2 + this.btn3;
      },
    });
    btns.forEach((btn) => {
      btn.disabled = false;
      btn.textContent = `На меня нажали ${dataBase[btn.dataset.button]} раз`;
    });
    span.textContent = 0;
  });

  for (const btn of btns) {
    btn.textContent = `На меня нажали ${dataBase[btn.dataset.button]} раз`;

    btn.addEventListener("click", () => {
      dataBase[btn.dataset.button]++;
      btn.textContent = `На меня нажали ${dataBase[btn.dataset.button]} раз`;
      span.textContent = dataBase.total;
      localStorage.setItem("+5+10", JSON.stringify(dataBase));

      if (dataBase.total >= 10) {
        btns.forEach((btn) => (btn.disabled = true));
      }

      if (dataBase[btn.dataset.button] >= 5) {
        btn.disabled = true;
      }
    });
  }

  // btn.addEventListener("click", function () {
  //   if (!localStorage.getItem(i)) {
  //     localStorage.setItem(i, 0);
  //   }

  //   let counter = parseInt(localStorage.getItem(i));

  //   counter++;

  //   localStorage.setItem(i, counter);

  //   this.textContent = `На меня нажали ${counter} раз`;
  // });
}
*/
let dataBase = getDataBase();

function setView() {
  const span = document.querySelector("span");
  span.textContent = dataBase.total;

  const btns = document.querySelectorAll("[data-button]");

  for (let btn of btns) {
    const key = btn.dataset.button;
    btn.addEventListener("click", () => {
      btn.textContent = `На меня нажали ${dataBase[key]} раз`;
    });

    dataBase.total >= 10 ? (btn.disabled = true) : (btn.disabled = false);
  }

  btns.forEach((btn) => {
    const key = btn.dataset.button;
    if (dataBase[key] >= 5) {
      btn.disabled = true;
    }
    btn.textContent = `На меня нажали ${dataBase[key]} раз`;
  });
}

function initApp() {
  const clearBtn = document.querySelector("[data-clear]");
  clearBtn.addEventListener("click", () => {
    localStorage.clear();
    dataBase = getDataBase();
    setView();
  });

  const btns = document.querySelectorAll("[data-button]");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.button;
      dataBase[key]++;
      setDataBase(dataBase);
      setView();
    });
  });
}

function getDataBase() {
  if (!localStorage.getItem("+5+10")) {
    setDataBase({
      btn1: 0,
      btn2: 0,
      btn3: 0,
    });
  }

  const dataBase = JSON.parse(localStorage.getItem("+5+10"));

  Object.defineProperty(dataBase, "total", {
    get() {
      return this.btn1 + this.btn2 + this.btn3;
    },
  });

  return dataBase;
}

function setDataBase(database) {
  localStorage.setItem("+5+10", JSON.stringify(database));
}

initApp();
setView();
