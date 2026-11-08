document.querySelector("#vaelg-scene").addEventListener("click", gaaTilScene);
document
  .querySelector("#vaelg-indgang")
  .addEventListener("click", gaaTilIndgang);
document.querySelector("#vaelg-cafe").addEventListener("click", gaaTilCafe);

function gaaTilScene() {
  document.querySelector(".figur").style.translate = "40% 0%";
  document.querySelector(".punkt").style.translate = "40% 0%";
  document.querySelector("#besked").textContent = "Figuren står ved scenen.";
}
function gaaTilIndgang() {
  document.querySelector(".figur").style.translate = "0% 0%";
  document.querySelector(".punkt").style.translate = "0% 0%";
  document.querySelector("#besked").textContent = "Figuren står ved indgangen.";
}
function gaaTilCafe() {
  document.querySelector(".figur").style.translate = "40% 40%";
  document.querySelector(".punkt").style.translate = "40% 40%";
  document.querySelector("#besked").textContent = "Figuren står ved caféen.";
}
