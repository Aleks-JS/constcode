$.ajax("http://localhost:3000/users/5", {
  method: "DELETE",
  success(data) {
    document.querySelector("pre").textContent = JSON.stringify(data, null, 3);
  },
});
