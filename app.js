document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggler");
  const navbar = document.getElementById("collapse")

  button.addEventListener("click", function () {
      this.classList.toggle("active-state");
  });

  button.addEventListener("click", function () {
    if (this.classList.contains("active-state")) {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  });
});
