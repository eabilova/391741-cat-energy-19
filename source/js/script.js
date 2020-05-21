// window.onload = showMenu() {
//   document.getElementById("menu-button").classList.toggle("show");
// };

document.getElementById("menu-button").addEventListener("load", function (e) {
  var target = e.target;

  target.classList.toggle("show");
}, false)

function openMenu() {
  document.getElementById("main-nav-id").classList.toggle("show");
}

document.getElementById("menu-button").addEventListener("click", function (e) {
  var target = e.target;

  target.classList.toggle("off");
  target.classList.toggle("on");
}, false);
