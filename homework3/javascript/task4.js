"use strict";
// Є продукти: Book (має author), Electronics (має warranty), Clothes (має size). 
// Продукти можуть бути onSale або regularPrice. Створити тип ShopProduct, 
// який об’єднує тип продукту та його статус, використовуючи & і |.
if (confirm('Почати тестування?')) {
    const book = {
        type: 'book',
        author: 'Stiven King',
        status: 'regularPrice'
    };
    const electronic = {
        type: 'electronics',
        warranty: 'bis 20.08.2027',
        status: 'onSale'
    };
    const rock = {
        type: 'clothes',
        size: 'M',
        status: 'onSale'
    };
    const products = [book, electronic, rock];
    document.write(`<h2 style="font-family:Arial; text-align:center; color:#333;">🛍️ Shop Products</h2>`);
    document.write(`<div style="display:flex; gap:20px; flex-wrap:wrap; font-family:sans-serif;">`);
    products.forEach(p => {
        let details = '';
        switch (p.type) {
            case 'book':
                details = `<strong>Author:</strong> ${p.author}`;
                break;
            case 'electronics':
                details = `<strong>Warranty:</strong> ${p.warranty}`;
                break;
            case 'clothes':
                details = `<strong>Size:</strong> ${p.size}`;
                break;
            default:
                const _exhaustive = p;
                throw new Error(`Wrong product type ${p}`);
        }
        const color = p.status === 'onSale' ? '#e0ffe0' : '#f0f0f0';
        const statusText = p.status === 'onSale' ? '🔥 On Sale!' : '💰 Regular Price';
        document.write(`
        <div style="
          background:${color};
          border:1px solid #ccc;
          border-radius:10px;
          padding:15px;
          margin:10px auto;
          width:300px;
          font-family:Arial;
          box-shadow:0 0 5px rgba(0,0,0,0.1);
        ">
          <h3 style="text-transform:capitalize; color:#555;">${p.type}</h3>
          <p>${details}</p>
          <p><em>${statusText}</em></p>
        </div>
      `);
    });
    document.write(`</div>`);
}
