function createCounter(start) {
    let current = start;
    return function() {
        const result = current;
        current += 1;
        return result;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());