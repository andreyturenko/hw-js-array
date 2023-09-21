// // // Tasks: JS. Array

// // 0. Створити числовий масив та проініціалізувати.

const numericals = [18, 96, 108, 125];
console.table(numericals);

// // *випадковими числами.

const numRandoms = [];
const arrLength = 5;

for (let i = 0; i < arrLength; i++) {
  const randomNumber = Math.floor(Math.random() * 1000);
  numRandoms.push(randomNumber);
}

console.table(numRandoms);

// // 1. Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
// -----------------------------------------------------------------------------------------
const varArrays = [100, 200, 300, 400, 500, 600];

varArrays.pop();
// varArrays.shift(); - Reduces performance, not recommended for use
varArrays.splice(0, 1);
varArrays.unshift(10);
varArrays.push(700);

console.table(varArrays);

// // 2. Вивести розмір масиву.

console.log("Array size :>> ", varArrays.length);

// // 3. Зробити копію масиву.

const copyVarArrays = [...varArrays];
console.log("Copy of the array :>> ", copyVarArrays === varArrays);

// // // Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли:
// // 4. Вивести елементи з парними індексами.

for (let i = 0; i < varArrays.length; i++) {
  if (i % 2 === 0) {
    console.log("Elements with even indexes :>> ", varArrays[i]);
  }
}
// -----------------------------------------------------------------------------------------

// // 5. Вивести лише парні елементи (парні числа діляться на 2 без залишку).
// -----------------------------------------------------------------------------------------
const evenNumbers = [10, 20, 13, 50, 99, 100, 1, 41];

for (let i = 0; i < evenNumbers.length; i++) {
  if (evenNumbers[i] % 2 === 0) {
    console.log("Elements with even numbers :>> ", evenNumbers[i]);
  }
}

// // 6. Вивести індекси нульових елементів (елемент дорівнює нулю).

console.log("Zero index elements :>> ", evenNumbers[0]);
// ----------------------------------------------------------------------------------------

// // 7. Підрахувати кількість нульових елементів (елемент дорівнює нулю).

const numbElements = [10, 0, 17, 0, 100];

let zeroCounts = 0;

for (let i = 0; i < numbElements.length; i++) {
  if (numbElements[i] === 0) {
    zeroCounts++;
  }
}
console.log("Amount zero elements :>> ", zeroCounts);

// // // Методи перебору масивів (forEach, filter, map, findIndex, *some, *every):
// // // 8. Отримати новий масив із заданого, який міститиме лише ненульові числа
// // //    (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter

const arrNonZeros = [-1, 5, 0, 9, -10];

const newNonZero = arrNonZeros.filter((arrNonZeros) => arrNonZeros !== 0);
console.table(newNonZero);

// // 9. Отримати новий масив із заданого, який міститиме всі елементи вихідного,
// // // поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map

const arrDivides = [99, 5, 0, 9, 30];

const newArrDivide = arrDivides.map((arrDivides) => arrDivides / 100);
console.table(newArrDivide);

// // 10. Вивести елементи масиву, зведені у куб. // forEach

const arrIsCubes = [2, 3, 4, 5, 6, 7, 8, 9, 10];

arrIsCubes.forEach(function (arrIsCubes) {
  const accuCub = arrIsCubes ** 3;
  console.log(accuCub);
});

// // 11. Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його,
// // //  або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex

const indexDefines = [60, 100, 10, 188];

const index = indexDefines.findIndex(
  (indexDefines) => indexDefines ** 2 === 100
);

if (index !== -1) {
  indexDefines.splice(index, 1);
} else {
  console.log("There is not such element");
}
console.table(indexDefines);

// // 12. *Перевірити, чи всі елементи масиву є парними числами. // every
// ---------------------------------------------------------------------------------------
const arrOfValues = [12, 18, 42, 33, 1, 25];

const arrToCheck = arrOfValues.every((arrOfValues) => arrOfValues % 2 === 0);

console.log("Array elements paired :>> ", arrToCheck);

// (* або простими числами)

// ---------------------------------------------------------------------------------------

// // 13. *Перевірити, чи є у масиві бодай один від'ємний елемент. // some

const arrNumbers = [16, 88, 54, -8, 44];

const negativeNumber = arrNumbers.some((arrNumbers) => arrNumbers < 0);

console.log("Negative number :>> ", negativeNumber);
