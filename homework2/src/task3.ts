// Вводиться номер місяця або назва місяця. 
// Створити функцію, яка повинна повертати номер пори року (1-4) якщо передаємо число, або назву пори року, 
// якщо було введено назву місяця. Використати перевантаження функцій. 

if (confirm('Почати тестування?')) {
  /**
   * Функція викидує помилку з текстом message
   * @param message текст помилки
   */
  function fail(message:string):never{
    throw new Error(message)
  }

  function getSeason(month:string):string
  function getSeason(month: number):number

  function getSeason(month:string | number):string | number{
    switch (month) {
      case 12:
      case 1:
      case 2: return 1
      case 'dec':
      case 'jan':
      case 'feb': return 'winter'
      case 3:
      case 4:
      case 5: return 2
      case 'mar':
      case 'apr':
      case 'may': return 'spring'
      case 6:
      case 7:
      case 8: return 3
      case 'jun':
      case 'jul':
      case 'aug': return 'summer'
      case 9:
      case 10:
      case 11:return 4
      case 'sep':
      case 'oct':
      case 'nov': return 'fall'
      default:
        fail(`Не вірний номер або назва місяця: ${month}`)
    }
  }
  
  function parseMonth(input:string | null):number
  function parseMonth(input:string | null):string

  function parseMonth(input: string | null):number|string{
    const monthsStringArray = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    if(input === null) fail('Скасовано користувачем')
    let month:number | string = input
    if(monthsStringArray.includes(month)) return month
    month = Number(input.trim())
    if(Number.isNaN(month)) fail (`Ви ввели не вірний номер місяця (1-12) або не вірну назву місяця: ${input}`)
    if(!Number.isInteger(month)) fail('Потрібне ціле число (1-12)')
    if(month<1 || month>12) fail('Місяць має бути від 1 до 12')
    return month  
  } 
      
  const userMonth = prompt('Введіть номер (1-12)місяця або назву місяця (jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec)')

  try{
    const month = parseMonth(userMonth)
    const season =  getSeason(month)
    if(typeof season === 'number'){
      document.write(`
        Ви ввели номер місяця: ${month}<br/>
        Номер пори року: ${season}
        `)
    }else{
      document.write(`
        Ви ввели назву місяця: ${month}<br/>
        Назва пори року: ${season}
        `)
    }
  }catch(e){
    const msg = e instanceof Error ? e.message : String(e)
    alert (`Помилка: ${msg}`)
  }
}

  