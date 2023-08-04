function berechnen(){
    let euro= euroFeld.value;
    let result = euro * 1.0942;
    usd.value = result.toFixed(2).replace('.', ',');
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }