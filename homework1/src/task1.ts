// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.

if (confirm('Почати тестування?')) {
  type DataType = {field1:string,field2:string|number}
  // Об'єкт 1: field2 як рядок
  const obj1:DataType = {
    field1: 'hello',
    field2: 'world'
  };

  // Об'єкт 2: field2 як рядок
  const obj2:DataType = {
    field1: "test",
    field2: 41
  };

  const randomObjNumber:1 | 2 = Math.random()>0.5?1:2
  if(randomObjNumber===1) localStorage.setItem('data',JSON.stringify(obj1))
  else localStorage.setItem('data',JSON.stringify(obj2))
  
  const isEven = (num: number) => num % 2 === 0;

  const dataStr = localStorage.getItem('data')!;
  const data:DataType  = JSON.parse(dataStr) as DataType
  if(typeof data.field2 === 'string'){
    document.write(`Довжина рядка: ${data.field2.length}`)
  }else{
    document.write(`Число ${data.field2} є ${isEven(data.field2) ? 'парним' : 'не парним'}`)
  }
}