const buttons = document.querySelectorAll("button"),
  countField = document.querySelector(".count__field");

buttons.forEach((btn) => {
  const collection = new Map();
  collection.set(btn, 0);

  btn.addEventListener("click", (e) => {
    collection.set(btn, collection.get(btn) + 1);

    //Вне основного задания
    countField.textContent = collection.get(btn);
    countField.style.color = btn.textContent;

    if (collection.get(btn) === 1) {
      btn.classList.add(btn.textContent);
    }

    if (collection.get(btn) === 4) {
      btn.classList.remove(btn.textContent);
      collection.set(btn, 0);
    }
    console.log(collection);
  });
});
