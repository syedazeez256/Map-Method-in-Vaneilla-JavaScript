"use strict";

const movements = [200, 450, -400, 3000, -650, 130, -560, 1300];

const usdToEur = 1.1;
const movementUSD = movements.map((mov) => {
  return mov * usdToEur;
});

console.log(movements);
console.log(movementUSD);

let newMovement = [];
for (const move of movements) {
  newMovement.push(move * usdToEur);
}

console.log(newMovement);

const movementdiscription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdraw"} ${Math.abs(
      mov
    )}`
);

console.log(movementdiscription);
