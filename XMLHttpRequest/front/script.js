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

const request = new XMLHttpRequest();

request.onload = function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
};

request.open("get", "http://localhost:3000/users/", true);
request.send();
