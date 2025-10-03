"use strict";
// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.
if (confirm('Почати тестування?')) {
    const user = {
        id: 1,
        name: "Anna",
        age: 20,
        email: "anna@example.com",
        isActive: true,
        pets: ['dog', 'cat']
    };
    localStorage.setItem('data', JSON.stringify(user));
    const dataStr = localStorage.getItem('data');
    const data = JSON.parse(dataStr);
    Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            document.write(`${key}: ${value.join(", ")}<br>`);
        }
        else {
            document.write(`${key}: ${value}<br>`);
        }
    });
}
