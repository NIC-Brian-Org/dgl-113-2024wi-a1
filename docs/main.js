'use strict';

(() => {
  window.addEventListener('load', (event) => {
    const plainVars = ['guestName', 'numberOfNights'];
    for (const i in plainVars) {
      document.getElementById(plainVars[i]).textContent = eval(plainVars[i]);
    }
    const dollarVars = [
      'nightlyRate',
      'subTotal',
      'pstAmount',
      'gstAmount',
      'total',
    ];
    for (const i in dollarVars) {
      document.getElementById(dollarVars[i]).textContent =
        '$' + eval(dollarVars[i]).toFixed(2);
    }
  });
})();
