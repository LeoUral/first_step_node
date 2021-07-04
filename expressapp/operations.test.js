let operations = require('./operations');

it('Функция multiplay два числа', function() {

    let expectedResult = 15;
    let result = operations.multiply(3, 5);
    if (result !== expectedResult) {
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});

it('Функция сложения двух чисел', function() {

    let expectedResult = 16;
    let result = operations.add(9, 7);
    if (result !== expectedResult) {
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});

it('Асинхронная функция умножения двух чисел', (done) => {

    let expectedResult = 12;
    operations.multiplyAsync(4, 3, (result) => {
        if (result !== expectedResult) {
            throw new Error(`Expected ${expectedResult}, but got ${result}`);
        }
        done(); //обязательно, что бы дождаться выполнения асинхронной функции
    });
});