'use strict';

let total = 0;
let limit = 10;

for (let i = 0; i < limit; i++) {
  total += i;
}
console.log(total);

// console log must remain outside of {} in order to get only 1 value for the
// output, otherwise it will print all of the values that went through the loop.
