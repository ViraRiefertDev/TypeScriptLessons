// Задача 4. Автоматичне формування ID. 
// Статичне поле генерує унікальні ідентифікатори (спочатку 0, потім інкремент). 

import IdGenerator from "./IdGenerator.js";
if (confirm('Почати тестування?')){
  const id1 = IdGenerator.getNewId()
  const id2 = IdGenerator.getNewId()
  const id3 = IdGenerator.getNewId()
  const id4 = IdGenerator.getNewId()
  const id5 = IdGenerator.getNewId()
  console.log(id1,id2,id3,id4,id5)
}