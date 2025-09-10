function countTypes(arr) {
    for (const item of arr) {
        const type = typeof item;
        if (type in Types) {
            Types[type]++;
        }
    }
}
const Types = { number: 0, string: 0, boolean: 0 };
const array = [1, "hello", true, 42, "world", false, 3.14, "JavaScript", true, 100, "code", false, 7, "test", true, 0, "end", 99, "types", false, 2.71];
countTypes(array);
console.dir(Types);