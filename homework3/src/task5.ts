// Задача 5.  У localStorage зберігається об’єкт у форматі JSON. 
// Проаналізувати чи є цей об'єкт  типу Product{     title:string,     price:number }


if (confirm('Почати тестування?')) {
  type Product = {title:string; price:number}
  type Employee =  {firstName:string; position:string}
  type DataType = Employee| Product

  const obj1:DataType = {
    firstName: 'Anton',
    position: 'Manager'
  };

  const obj2:DataType = {
    title: "milk",
    price: 134
  };

  function isProduct(value:unknown):value is Product{
    return !!value && (typeof value === 'object') && ['title','price'].every(key=>key in value) 
  }

  const randomObjNumber:1 | 2 = Math.random()>0.5?1:2
  if(randomObjNumber===1) localStorage.setItem('data',JSON.stringify(obj1))
  else localStorage.setItem('data',JSON.stringify(obj2))
  
  const dataStr = localStorage.getItem('data')??'';
  const data:unknown  = JSON.parse(dataStr)
  if(isProduct(data)){
    document.write(`
      <div style="font-family:Arial;background:#e8fff0;border:1px solid #bde5c8;border-radius:10px;padding:12px;max-width:420px;">
        <h3 style="margin:0 0 8px;">✅ Це об'єкт типу <code>Product</code></h3>
        <p style="margin:0;"><strong>title:</strong> ${data.title}</p>
        <p style="margin:4px 0 0;"><strong>price:</strong> ${data.price}</p>
      </div>
    `)
  }else{
    document.write(`
      <div style="font-family:Arial;background:#ffecec;border:1px solid #f5b6b6;border-radius:10px;padding:12px;max-width:420px;">
        <h3 style="margin:0 0 8px;">⚠️ Невідомий формат даних</h3>
        <p style="margin:0;">Об'єкт не відповідає типу Product.</p>
      </div>
    `)
  }
}



