// Задача 3. Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів. 
// Вивести чек про купівлю.

if (confirm('Почати тестування?')) {
  type Product = {
    name:string
    price:number
    amount:number
  }

  function getProduct():Product{
    const name = prompt('Введіть назву товару')!
    const price = parseFloat(prompt('Введіть ціну одиниці товару')!)
    const amount = parseInt(prompt('Введіть кількість товару', '1')!)
    return {
      name,
      price,
      amount,
    }
  }

  
  const firstProduct = getProduct()
  const secondProduct = getProduct()

  function printReceipt(products: Product[]) {
    let total = 0;
    document.write('<h2>Чек</h2>');
    products.forEach((p) => {
      const cost = p.price * p.amount;
      total += cost;
      document.write(`${p.name} - ${p.amount} x ${p.price.toFixed(2)} = ${cost.toFixed(2)} грн<br>`);
    });
    document.write(`<hr>Всього: ${total.toFixed(2)} грн`);
  }

  printReceipt([firstProduct, secondProduct]);
}

  