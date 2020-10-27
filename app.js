const btn = document
  .querySelector(".hamburger")
  .addEventListener("click", function () {
    document.body.classList.add("nav-open");
  });
const times = document
  .querySelector(".times")
  .addEventListener("click", function () {
    document.body.classList.remove("nav-open");
  });
const link = document.querySelectorAll(".nav-link");

link.forEach(function (link) {
  link.addEventListener("click", function () {
    document.body.classList.remove("nav-open");
  });
});
