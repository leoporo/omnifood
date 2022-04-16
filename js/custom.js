document.querySelectorAll(".nav-btn, .menu, .btn-try").forEach(el => {
  el.addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open-nav");
  });
});

document.querySelector("#currentYear").innerText = new Date().getFullYear();
