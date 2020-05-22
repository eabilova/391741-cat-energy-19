document.getElementById("menu-button").classList.toggle("show");
document.getElementById("main-nav-id").classList.remove("show");

function openMenu() {
  document.getElementById("main-nav-id").classList.toggle("show");
}

document.getElementById("menu-button").addEventListener("click", function (e) {
  var target = e.target;

  target.classList.toggle("off");
  target.classList.toggle("on");
}, false);
