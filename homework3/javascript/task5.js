"use strict";
// Задача 5.  У localStorage зберігається об’єкт у форматі JSON. 
// Проаналізувати чи є цей об'єкт  типу Product{     title:string,     price:number }
var _a;
if (confirm('Почати тестування?')) {
    const obj1 = {
        firstName: 'Anton',
        position: 'Manager'
    };
    const obj2 = {
        title: "milk",
        price: 134
    };
    function isProduct(value) {
        return !!value && (typeof value === 'object') && ['title', 'price'].every(key => key in value);
    }
    const randomObjNumber = Math.random() > 0.5 ? 1 : 2;
    if (randomObjNumber === 1)
        localStorage.setItem('data', JSON.stringify(obj1));
    else
        localStorage.setItem('data', JSON.stringify(obj2));
    const dataStr = (_a = localStorage.getItem('data')) !== null && _a !== void 0 ? _a : '';
    const data = JSON.parse(dataStr);
    if (isProduct(data)) {
        document.write(`
      <div style="font-family:Arial;background:#e8fff0;border:1px solid #bde5c8;border-radius:10px;padding:12px;max-width:420px;">
        <h3 style="margin:0 0 8px;">✅ Це об'єкт типу <code>Product</code></h3>
        <p style="margin:0;"><strong>title:</strong> ${data.title}</p>
        <p style="margin:4px 0 0;"><strong>price:</strong> ${data.price}</p>
      </div>
    `);
    }
    else {
        document.write(`
      <div style="font-family:Arial;background:#ffecec;border:1px solid #f5b6b6;border-radius:10px;padding:12px;max-width:420px;">
        <h3 style="margin:0 0 8px;">⚠️ Невідомий формат даних</h3>
        <p style="margin:0;">Об'єкт не відповідає типу Product.</p>
      </div>
    `);
    }
}
