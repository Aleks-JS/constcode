$.ajax("http://localhost:3000/users/2", {
  success(data) {
    document.querySelector("pre").textContent = JSON.stringify(data, null, 3);
  },
});
