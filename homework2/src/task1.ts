// Вводиться перший номер  місяця якоїсь пори року (3,6,9,12). 
// Визначити пору року. Передбачити перевірку і генерувати помилку якщо некоректний місяць (1-12) 
// і генерувати помилку якщо це не перший місяць пори року. Використати never.
if (confirm('Почати тестування?')) {

  /**
   * Функція викидує помилку з текстом message
   * @param message текст помилки
   */
  function fail(message:string):never{
    throw new Error(message)
  }

  type FirstMonthsOfSeasons = 3 | 6 | 9 | 12 

  enum Season{
    Summer = 6,
    Spring = 3,
    Fall = 9,
    Winter = 12
  }

  /**
   * функція перевіряє чи є input числом від 1 до 12
   * @param input значення, яке треба перевірити
   * @returns число від 1 до 12
   */
  function parseMonth(input: string | null):number{
    if(input === null) fail('Скасовано користувачем')
    const number = Number(input.trim())
    if(Number.isNaN(number)) fail ('Ви ввели не число')
    if(!Number.isInteger(number)) fail('Потрібне ціле число')
    if(number<1 || number>12) fail('Місяць має бути від 1 до 12')
    return number  
  }

  /**
   * Функція перевіряє чи є місяць першим місяцем сезону
   * @param month місяць який треба перевірити
   * @returns перший місяць сезону
   */
  function toFirstMonth(month: number):FirstMonthsOfSeasons{
    switch (month) {
      case 3:
      case 6:
      case 9:
      case 12:
        return month
      default:
        fail("Це не перший місяць сезону (очікується 3, 6, 9 або 12).")
    }
  }

  /** 
   * функція по номеру першого місяця сезону визначає який це сезон
   * @param monthNum перший номер місяця сезону
   * @returns сезон
   */
  function getSeasonOfMonth(monthNum:FirstMonthsOfSeasons):Season{
    switch (monthNum) {
      case 3: return Season.Spring
      case 6: return Season.Summer
      case 9: return Season.Fall
      case 12: return Season.Winter
      default:
        const _exhaustive:never = monthNum
        fail('Не вірний номер місяця')
    }
  }

  try{
    const raw =  prompt('Введіть перший номер місяця якоїсь пори року (3,6,9,12)') 
    const month = parseMonth(raw)
    const firstMonth = toFirstMonth(month)
    const season = getSeasonOfMonth(firstMonth)

    alert(`Перший місяць: ${firstMonth}\nПора року: ${Season[season]}`)
  }catch (e:unknown){
    const msg = e instanceof Error ? e.message : String(e)
    alert(`Помилка: ${msg}`)
  }
}