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
  let text = "Sie werden umgeleitet auf meine Link Seite. Viel spaß :D";
  if (confirm(text) == true) {
    text = "You pressed OK!";
    document.location.href="https://alislinkversite.netlify.app/";
  } else {
    text = "You canceled!";
  }
  document.getElementById("demo").innerHTML = text;
}

//function myFunction() {
//  var myWindow = window.open("index.html", "", "width=400, height=200");
//  myWindow.blur();
//}
