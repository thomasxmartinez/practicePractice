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

function findNeedle (hayStack) {
  // your code here
  var count = -1;
  for (var i = 0; i < hayStack.length; i++) {
    count++;
    if (hayStack[i] === 'needle') {
      return 'found the needle at position ' + count.toString();
    }
  }
}

var hayStack1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

console.log(findNeedle(hayStack1));// 'found the needle at position 3'

function number (busStops) {
  // Good Luck!
  var passengers = 0;
  var drops = 0;
  for (var i = 0; i < busStops.length; i++) {
    passengers += busStops[i][0];
    drops += busStops[i][1];
  }
  return passengers - drops;
}

console.log(number([[10, 0], [3, 5], [5, 8]]));// 5
