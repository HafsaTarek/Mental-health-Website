document.querySelectorAll(".progress-circle").forEach((circle) => {
  const value = circle.getAttribute("data-value");
  circle.style.setProperty("--value", value);
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const myModal = new bootstrap.Modal(document.getElementById("messageModal"));
  myModal.show();

  this.reset();
});

