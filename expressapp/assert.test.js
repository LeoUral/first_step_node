let assert = require('assert');
let operations = require('./operations');

it('Проверка функции умножения через ASSERT', () => {

    let expected = 5;
    let result = operations.multiply(3, 5);
    assert.equal(result, expected,
        new Error(`Ошибка блин !!!! Должно быть ${result}, а не ${expected}`)
    );
});