'use strict';

(() => {
  window.addEventListener('load', (event) => {
    // update document content
    const setContent = (id, text) => {
      document.getElementById(id).textContent = text;
    };

    // ordinary values
    ['guestName', 'numberOfNights'].map((id) => setContent(id, eval(id)));

    // dollar valuse
    ['nightlyRate', 'subTotal', 'pstAmount', 'gstAmount', 'total'].map((id) =>
      setContent(id, '$' + eval(id).toFixed(2))
    );

    // percent values
    ['pstRate', 'gstRate'].map((id) =>
      setContent(id, (eval(id) * 100).toFixed(2) + '%')
    );
  });
})();
