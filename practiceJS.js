'use strict';

function formatMoney (amount) {
  // your formatting code here
  amount = amount.toFixed(2);
  return '$' + amount.toString();
}

console.log(formatMoney(39.996));

function evenOrOdd (number) {
  if (number % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
}

console.log(evenOrOdd(2));
