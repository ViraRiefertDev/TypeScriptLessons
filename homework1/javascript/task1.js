"use strict";
// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.
if (confirm('Почати тестування?')) {
    // Об'єкт 1: field2 як рядок
    const obj1 = {
        field1: 'hello',
        field2: 'world'
    };
    // Об'єкт 2: field2 як рядок
    const obj2 = {
        field1: "test",
        field2: 41
    };
    const randomObjNumber = Math.random() > 0.5 ? 1 : 2;
    if (randomObjNumber === 1)
        localStorage.setItem('data', JSON.stringify(obj1));
    else
        localStorage.setItem('data', JSON.stringify(obj2));
    const isEven = (num) => num % 2 === 0;
    const dataStr = localStorage.getItem('data');
    const data = JSON.parse(dataStr);
    if (typeof data.field2 === 'string') {
        document.write(`Довжина рядка: ${data.field2.length}`);
    }
    else {
        document.write(`Число ${data.field2} є ${isEven(data.field2) ? 'парним' : 'не парним'}`);
    }
}
