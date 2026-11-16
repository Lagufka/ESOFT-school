import { deepClone } from './copy.js';

const original = {
    name: "Test",
    date: new Date(),
    numbers: [1, 2, 3],
    nested: {
        value: 10
    },
    map: new Map([["key", { value: 20 }]]),
    set: new Set([1, 2, 3]),
    func: function() {
        return "Hello";
    },
    [Symbol("id")]: 123
};

original.self = original;

const copy = deepClone(original);

console.log(original !== copy);
console.log(original.nested !== copy.nested);
console.log(original.numbers !== copy.numbers);
console.log(original.date !== copy.date);
console.log(original.map !== copy.map);
console.log(original.set !== copy.set);

console.log(copy.self === copy);

copy.nested.value = 100;
copy.numbers.push(4);

console.log(original.nested.value);
console.log(original.numbers);

console.log(copy.date instanceof Date);
console.log(copy.func());
