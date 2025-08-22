//1-misol

class ArrayTask1 {
    static solve(arr) {
        let result = arr
            .map(n => Math.abs(n))
            .map(n => (n % 2 === 0 ? n * n : n));

        let sum = 0;
        for (let i = 0; i < result.length; i++) {
            sum += result[i];
        }

        return { result: result, sum: sum };
    }
}

let input = [-5, 3, 2, -4, 7, 6, 0];
let output = ArrayTask1.solve(input);

console.log("Kiritma:", input);
console.log("Natija massiv:", output.result);
console.log("Yig'indi:", output.sum);        