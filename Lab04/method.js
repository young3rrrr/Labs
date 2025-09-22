const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7

function sum (...args) {
    const sum = args.reduce((acc, value) => acc + value, 0);
    return sum
}
console.log(a, b, c, d, e);