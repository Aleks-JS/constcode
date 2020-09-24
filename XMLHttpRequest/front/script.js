$.ajax("http://localhost:3000/users", {
  method: "POST",
  data: {
    name: "Marina",
    surname: "WTF",
  },
  success(data) {
    document.querySelector("pre").textContent = JSON.stringify(data, null, 3);
  },
});
