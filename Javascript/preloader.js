// Warte bis die Seite geladen ist
window.addEventListener("load", function () {
  // Verstecke den Preloader
  document.querySelector(".preloader").style.display = "none";
  // Zeige den eigentlichen Inhalt
  document.querySelector(".content").style.display = "block";
});
