function berechnen() {
  let euro = euroFeld.value;
  let result = euro * 1.0942;
  usd.value = result.toFixed(2).replace(".", ",");
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Warte bis die Seite geladen ist
window.addEventListener("load", function () {
  // Verstecke den Preloader
  document.querySelector(".preloader").style.display = "none";
  // Zeige den eigentlichen Inhalt
  document.querySelector(".content").style.display = "block";
});

function linkver(){
  confirm('Willst du auf meine linkerversite gehen?')
  document.location.href="https://alislinkversite.netlify.app/";
}

//function myFunction() {
//  var myWindow = window.open("index.html", "", "width=400, height=200");
//  myWindow.blur();
//}
