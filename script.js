document.querySelectorAll(".progress-circle").forEach((circle) => {
  const value = circle.getAttribute("data-value");
  circle.style.setProperty("--value", value);
});


  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent page reload
      const messageModal = new bootstrap.Modal(document.getElementById('messageModal'));
      messageModal.show(); // show the modal
      form.reset(); // optional: reset form after showing the modal
    });
  });
