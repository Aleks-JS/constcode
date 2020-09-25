// Работа с запросами через Ajax. Необходима JQuery
// $.ajax("http://localhost:3000/users/4", {
//   method: "PUT",
//   data: {
//     name: "Maxim",
//     surname: "Green",
//   },
//   success(data) {
//     document.querySelector("pre").textContent = JSON.stringify(data, null, 3);
//   },
// });

// Работа с запросами через XMLHttpRequest. Устаревший метод
// const request = new XMLHttpRequest();

// request.onload = function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// };

// request.open("get", "http://localhost:3000/users/", true);
// request.send();

// Работа с запросами через созданный метод, наподобие JQuery
const ajax = (url, param) => {
  const request = new XMLHttpRequest();

  request.onload = function () {
    param.success(JSON.parse(this.responseText));
  };
  request.open(param.method ?? "GET", url, true);
  request.send();
};

ajax("http://localhost:3000/users", {
  method: "GET",
  success(data) {
    console.log(data);
  },
});
