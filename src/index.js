import Exchange from "./js/currency";
window.addEventListener("load", start);

function start()
{
  let ExchangeButton = document.getElementById("mainBtn");

  ExchangeButton.addEventListener("click", mainExchange);
}

function mainExchange() {
  let money1 = document.getElementById("moneyOne").value;
  let money2 = document.getElementById("moneyTwo").value;
  let money3 = document.getElementById("moneyAmount").value;  

  let promise = Exchange.exchange(money1, money2);
  let output;

  promise.then(function(response) {
    if (response.result==="success") {
      const apiResult = response;
      output = ("The exchange rate between " + money1 + " and " + money2 + " is " + `${apiResult.conversion_rate}%` + "\n" + money3 + " " + money1 + " is equal to " + (`${apiResult.conversion_rate}` * money3) + " " + money2);
      document.getElementById("showRate").innerHTML = (output);
    } else {
          
      output = (`There was an error processing your request: ${response}`);
      document.getElementById("showErrors").innerHTML = (output);
    }
  });
}


