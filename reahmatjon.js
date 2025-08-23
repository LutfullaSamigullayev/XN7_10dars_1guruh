// 1-masala
// function sumEvenSquares(arr) {
//   return arr
//     .map(x => Math.abs(x))
//     .filter(x => x % 2 === 0)
//     .map(x => x * x)
//     .reduce((a, b) => a + b, 0);
// }

// 2-masala
// function checkTwoArr(arr1, arr2) {
//   return arr1.some(x => arr2.includes(x));
// }

// 3-masala
// function sortArray(arr) {
//   if (Array.isArray(arr[0])) {
//     return arr.map(a => Array.isArray(a) ? a.slice().sort((x, y) => x - y) : Array(arr.length).fill(a));
//   } else if (typeof arr[0] === 'number') {
//     return arr.slice().sort((a, b) => a - b);
//   } else {
//     return Array(arr.length).fill(arr[0]);
//   }
// }

// 4-masala
// function numberSplit(n) {
//   let half = Math.floor(n / 2);
//   return [half, n - half];
// }

// 5-masala
// function sortByLength(arr) {
//   return arr.slice().sort((a, b) => a.length - b.length);
// }

// 6-masala
// function doubleAndSortEvens(arr) {
//   return arr.map(x => x * 2).filter(x => x % 2 === 0).sort((a, b) => a - b);
// }

// 7-masala
// function doubleAndSquareEvens(arr) {
//   const result = arr.map(x => x * 2).filter(x => x % 2 === 0).map(x => x * x);
//   console.log(result);
//   return result;
// }

// 8-masala
// function reverseImage(matrix) {
//   return matrix.slice().reverse().map(row => row.slice().reverse());
// }

// 9-masala
// function changeNumberToString(a, b) {
//   const nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//   if (a < b) return Array.from({length: b - a + 1}, (_, i) => nums[a + i - 1]);
//   else return Array.from({length: a - b + 1}, (_, i) => nums[a - i - 1]);
// }

// 10-masala
// function addToArray(n) {
//   const arr = Array.from({length: n}, (_, i) => i + 1);
//   const res = [];
//   for (let i = 0; i < arr.length; i += 3) {
//     res.push(arr.slice(i, i + 3));
//   }
//   return res;
// }