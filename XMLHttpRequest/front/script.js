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

/************************************************************** */
// Работа с запросами через XMLHttpRequest. Устаревший метод
// const request = new XMLHttpRequest();

// request.onload = function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// };

// request.open("get", "http://localhost:3000/users/", true);
// request.send();

/************************************************************* */
// Работа с запросами через созданный метод, наподобие JQuery
// const ajax = (url, param) => {
//   const request = new XMLHttpRequest();

//   request.onload = function () {
//     param.success(JSON.parse(this.responseText));
//   };
//   request.open(param.method ?? "GET", url, true);
//   request.send();
// };

// ajax("http://localhost:3000/users", {
//   method: "GET",
//   success(data) {
//     console.log(data);
//   },
// });

/************************************************************* */
// Работа с запросами через Fetch
// fetch("http://localhost:3000/users")
//   .then((result) => result.json())
//   .then((data) => console.log(data));

// // Работа с запросами через Fetch, используя async-await
// main();

// async function main() {
//   const response = await fetch("http://localhost:3000/users");
//   const data = await response.json();
//   console.log(data);
// }

// Отправка данных на сервер
// fetch("http://localhost:3000/users/", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({ name: "Natalia", surname: "Uvarova" }),
// })
//   .then((result) => result.json())
//   .then((data) => console.log(data));

// Частичное редактирование данных объекта на сервере
// fetch("http://localhost:3000/users/4", {
//   method: "PATCH",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Stepan",
//     surname: "Kresnikov",
//   }),
// })
//   .then((r) => r.json())
//   .then(
//     (d) =>
//       (document.querySelector("pre").textContent = JSON.stringify(d, null, 3))
//   );

// Частичное редактирование данных объекта на сервере
fetch("http://localhost:3000/users/5", {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    id: 5,
    name: "Alex",
    surname: "Kresnikov",
  }),
})
  .then((r) => r.json())
  .then(
    (d) =>
      (document.querySelector("pre").textContent = JSON.stringify(d, null, 3))
  );
