"use strict";
// Вводиться сума грошей і позначення валюти. 
// Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH"). 
// Тобто якщо вводять гривні, то перевести у долари і євро. 
// А якщо вводять долари, то перевести у гривні  і євро. 
// Курси валют – це константи. 
if (confirm('Почати тестування?')) {
    const USD_TO_UAH = 41;
    const EUR_TO_UAH = 43;
    const EUR_TO_USD = 1.05;
    const amount = parseFloat(prompt('Введіть суму грошей'));
    const currency = prompt('Введіть валюту(USD,EUR,UAH)');
    let resultHTML = '';
    if (currency === 'USD') {
        const usdToUah = amount * USD_TO_UAH;
        const usdToEur = amount / EUR_TO_USD;
        resultHTML = `
      ${amount.toFixed(2)}$ = ${usdToUah.toFixed(2)}₴<br/>
      ${amount.toFixed(2)}$ = ${usdToEur.toFixed(2)}€
      `;
    }
    else if (currency === 'EUR') {
        const eurToUah = amount * EUR_TO_UAH;
        const eurToUsd = amount * EUR_TO_USD;
        resultHTML = `
      ${amount.toFixed(2)}€ = ${eurToUah.toFixed(2)}₴<br/>
      ${amount.toFixed(2)}€ = ${eurToUsd.toFixed(2)}$
      `;
    }
    else if (currency === 'UAH') {
        const uahToUsd = amount / USD_TO_UAH;
        const uahToEur = amount / EUR_TO_UAH;
        resultHTML = `
      ${amount.toFixed(2)}₴ = ${uahToEur.toFixed(2)}€<br/>
      ${amount.toFixed(2)}₴ = ${uahToUsd.toFixed(2)}$
      `;
    }
    else {
        resultHTML = 'Ви ввели не вірно валюту';
    }
    document.write(resultHTML);
}
