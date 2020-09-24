$.ajax("http://localhost:3000/users/4", {
  method: "PATCH",
  data: {
    name: "Maxim",
  },
  success(data) {
    document.querySelector("pre").textContent = JSON.stringify(data, null, 3);
  },
});
