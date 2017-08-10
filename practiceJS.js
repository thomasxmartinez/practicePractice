'use strict';

function formatMoney (amount) {
  // your formatting code here
  amount = amount.toFixed(2);
  return '$' + amount.toString();
}

console.log(formatMoney(39.996));
