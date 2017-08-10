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

function digitize (n) {
  var numsArray = [];
  n = n.toString().split('').reverse();
  for (var i = 0; i < n.length; i++) {
    numsArray.push(Number(n[i]));
  }
  return numsArray;
}

console.log(digitize(35231));// [1,3,2,5,3]);

function countSheeps (arrayOfSheep) {
  var sheepCount = 0;
  if (arrayOfSheep === undefined || arrayOfSheep === null) {
    return 0;
  }
  for (var i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sheepCount += 1;
    }
  }
  return sheepCount;
}

var array1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];

console.log(countSheeps(array1));// "There are 17 sheeps in total"
