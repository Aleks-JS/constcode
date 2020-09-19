let dataBase = getDataBase();

function initApp() {
  const btns = document.querySelectorAll("[data-color]");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.color;
      dataBase[key]++;
      setDataBase(dataBase);
      setView();
    });
  });
}

function setView() {
  const btns = document.querySelectorAll("[data-color]");

  btns.forEach((btn) => {
    const key = btn.dataset.color;
    if (dataBase[key] === 1) {
        btn.style.background = key;
    }
    if (dataBase[key] === 4) {
        btn.style.background = '';
        dataBase[key] = 0;
        setDataBase(dataBase);
      }
  });
}

function getDataBase() {
  if (!localStorage.getItem("rgb")) {
    setDataBase({
      red: 0,
      green: 0,
      blue: 0,
    });
  }

  const dataBase = JSON.parse(localStorage.getItem("rgb"));

  return dataBase;
}

function setDataBase(database) {
  localStorage.setItem("rgb", JSON.stringify(database));
}

initApp();
setView();
