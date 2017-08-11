'use strict';

function getMiddle (s) {
  if (s.length % 2 === 0) {
    return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
  }
  if (s.length % 2 !== 0) {
    return s.charAt(s.length / 2);
  }
}

console.log(getMiddle('test'));// "es"
console.log(getMiddle('testing'));// "t"
