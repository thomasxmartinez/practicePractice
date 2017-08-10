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

function repeatStr (n, s) {
  var newString = '';
  for (var i = 0; i < n; i++) {
    newString += s;
  }
  return newString;
}

console.log(repeatStr(3, 'zoom'));

function opposite (number) {
  return number * -1;
}

console.log(opposite(44));

function sumArray (array) {
  function sortArray (a, b) {
    return a - b;
  }
  array = array.sort(sortArray);
  var newSum = 0;
  for (var i = 1; i < array.length - 1; i++) {
    newSum += array[i];
  }
  return newSum;
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]));// 16
