// 1-misol

// class ArrayTask1 {
//     static solve(arr) {
//         let result = arr
//             .map(n => Math.abs(n))
//             .map(n => (n % 2 === 0 ? n * n : n));
//         let sum = 0;
//         for (let i = 0; i < result.length; i++) {
//             sum += result[i];
//         }
//         return { result: result, sum: sum };
//     }
// }
// let input = [-5, 3, 2, -4, 7, 6, 0];
// let output = ArrayTask1.solve(input);
// console.log("Kiritma:", input);
// console.log("Natija massiv:", output.result);
// console.log("Yig'indi:", output.sum);         

//2-misol

// class Solution {
//     static checkTwoArr(arr1, arr2) {
//         const set1 = new Set(arr1);
//         return arr2.every(v => !set1.has(v));
//     }
// }
// console.log(Solution.checkTwoArr([1, 2, 3, 4], [0, 6]));
// console.log(Solution.checkTwoArr([3, 1], [4, 0]));
// console.log(Solution.checkTwoArr([9, 9, 8], [8, 9]));
// console.log(Solution.checkTwoArr([1, 2, 3, 4], [2, 3])); 

//3-misol

// class Solution {
//     static sortArray(arr1, arr2, str) {
//         const merged = [...arr1, ...arr2];
//         const asc = [...merged].sort((a, b) => a - b);
//         const desc = [...asc].sort((a, b) => b - a);
//         const filled = Array(asc.length).fill(str);
//         return [asc, desc, filled];
//     }
// }
// const [asc, desc, words] = Solution.sortArray([1, 10], [2, 3, 4], 'nodejs');
// console.log(asc);
// console.log(desc);
// console.log(words);  

//4-misol

// class Solution {
//     static numberSplit(n) {
//         const a = Math.floor(n / 2);
//         return [a, n - a];
//     }
// }
// console.log(Solution.numberSplit(4));
// console.log(Solution.numberSplit(10));
// console.log(Solution.numberSplit(11));
// console.log(Solution.numberSplit(-9)); 

//5-misol

// class Solution {
//     static sortByLength(arr) {
//         return [...arr].sort((a, b) => a.length - b.length);
//     }
// }
// console.log(Solution.sortByLength(["a", "ccc", "dddd", "bb"]));
// console.log(Solution.sortByLength(["apple", "pie", "shortcake"]));
//6-misol

// class Solution {
//     static doubleAndSortEven(arr) {
//         const doubled = arr.map(x => x * 2);
//         const evens = doubled.filter(x => x % 2 === 0);
//         return evens.sort((a, b) => a - b);
//     }
// }
// console.log(Solution.doubleAndSortEven([1, 2, 3, 4, 5]));
// console.log(Solution.doubleAndSortEven([6, 7, 8]));

//7-misol

// class Solution {
//     static doubleAndSquareEven(arr) {
//         const doubled = arr.map(x => x * 2);
//         const squaredEvens = doubled
//             .filter(x => x % 2 === 0)
//             .map(x => x * x);
//         console.log(squaredEvens);
//         return squaredEvens;
//     }
// }
// Solution.doubleAndSquareEven([1, 2, 3, 4, 5]);
// Solution.doubleAndSquareEven([6, 7, 8]);

//8-misol

// class Solution {
//     static reverseImage(matrix) {
//         const reversedRows = matrix.map(row => row.reverse());
//         const reversedMatrix = reversedRows.reverse();
//         return reversedMatrix;
//     }
// }
// console.log(Solution.reverseImage([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]));

//9-misol

// class Solution {
//     static changeNumberToString(start, end) {
//         const numbers = [
//             "zero", "one", "two", "three", "four",
//             "five", "six", "seven", "eight", "nine", "ten"
//         ];
//         const arr = [];
//         for (let i = start; i <= end; i++) {
//             arr.push(numbers[i]);
//         }
//         const reversed = [...arr].reverse();
//         return [arr, reversed];
//     }
// }
// console.log(Solution.changeNumberToString(1, 5));

//10-misol

// class Solution {
//     static addToArray(n) {
//         const arr = Array.from({ length: n }, (_, i) => i + 1);
//         const chunks = [];
//         for (let i = 0; i < arr.length; i += 3) {
//             chunks.push(arr.slice(i, i + 3));
//         }
//         return [arr, chunks];
//     }
// }
// console.log(Solution.addToArray(10));
