// Warte bis die Seite geladen ist
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");

  if (preloader) {
    preloader.style.display = "none";
  }

  if (content) {
    content.style.display = "block";
  }
});
