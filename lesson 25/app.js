const assert = require('assert');

function sum(a, b) {
    return a + b;
}

console.log('Тестирование функции sum');

assert.strictEqual(sum(2, 3), 5, 'Сумма 2 и 3 должна быть 5');
assert.strictEqual(sum(-1, 1), 0, 'Сумма -1 и 1 должна быть 0');

console.log('Все тесты пройдены!');

console.log('Результат суммирования 2 и 3:', sum(2, 3));
console.error('Ошибка: Некорректный ввод данных!');
console.warn('Предупреждение: Возможно возникновение проблем!');