window.onload = function load(){
  var intro = document.getElementById("intro");
  var underline = document.getElementById("underline");
  var text = document.getElementById("text");
  var introH = intro.offsetHeight;
  var introW = intro.offsetWidth;
  intro.style.opacity = 1;
  console.log(introH + " - " + introW);
  intro.style.left = "calc(50% - " + (introW / 2) + "px)";
  intro.style.top = "calc(50% - " + (introH / 2) + "px)";
  underline.style.webkitAnimation = "easein 3s ease";
  text.style.webkitAnimation = "fadein 3s";
}
window.onresize = function(){
  var intro = document.getElementById("intro");
  var underline = document.getElementById("underline");
  var introH = intro.offsetHeight;
  var introW = intro.offsetWidth;
  console.log(introH + " - " + introW);
  intro.style.left = "calc(50% - " + (introW / 2) + "px)";
  intro.style.top = "calc(50% - " + (introH / 2) + "px)";
}