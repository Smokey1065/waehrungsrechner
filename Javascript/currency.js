const currencyElement_one = document.getElementById("currencyone");
const currencyElement_two = document.getElementById("currencytwo");
const amountElement_one = document.getElementById("amount-one");
const amountElement_two = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");
//const swap = document.getElementById('swap');

// Adding the api link

function calculate() {
  const currency_one = currencyElement_one.value;
  const currency_two = currencyElement_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountElement_two.value = (amountElement_one.value * rate)
        .toFixed(2)
        .replace(".", ",");
    });
}

// Add event listener

currencyElement_one.addEventListener("change", calculate);
currencyElement_two.addEventListener("change", calculate);
amountElement_one.addEventListener("input", calculate);
amountElement_two.addEventListener("input", calculate);

//swap.addEventListener('click', function(){
//    const temp = currencyElement_one.value;
//    currencyElement_one.value = currencyElement_two.value;
//    currencyElement_two.value = temp;
//   calculate();
//});

calculate();

// Währungen und zugehörige Flaggen in einem Objekt speichern
var currencyData = {
  EUR: "/img/eu.png",
  USD: "/img/usa.png",
  GBP: "/img/uk.jpg",
  UAH: "/img/ukr.png",
  THB: "/img/thb.png",
  RUB: "/img/rub.png",
  JPY: "/img/JPY.png",
  NOK: "/img/nok.png",
  INR: "/img/inr.png",
  CHF: "/img/swissflag.png",
  HRK: "/img/hrk.png",
};

function updateCurrencyAndFlag(selectElementId, currencyDisplayId, flagImgId) {
  var selectElement = document.getElementById(selectElementId);
  var currencyDisplay = document.getElementById(currencyDisplayId);
  var flagImg = document.getElementById(flagImgId);

  selectElement.addEventListener("change", function () {
    var selectedCurrency = selectElement.value;

    // Währungsanzeige aktualisieren
    if (currencyDisplay) {
      currencyDisplay.innerHTML = selectedCurrency;
    }

    // Flaggenbild aktualisieren
    if (flagImg && currencyData[selectedCurrency]) {
      flagImg.src = currencyData[selectedCurrency];
    }
  });
}

// Funktionen für beide Select-Elemente aufrufen
updateCurrencyAndFlag("currencyone", "currency", "flag");
updateCurrencyAndFlag("currencytwo", "währung", "flagge");
