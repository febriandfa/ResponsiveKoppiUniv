const navbar = document.querySelector(".nav-item");

document.querySelector(".burger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

const burger = document.querySelector(".burger-menu");

document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
