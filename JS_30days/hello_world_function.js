function createHelloWorld() {
    return function() {
        return 'Hello World';
    };
}

const helloWorld = createHelloWorld();
console.log(helloWorld());
console.log(helloWorld("But this is not a valid argument"));
console.log(helloWorld(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));