// Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа. 

if (confirm('Почати тестування?')) {

  function getLastDigit(number:string):string
  function getLastDigit(number:number):number

  /**
   * функція, дозволяє знайти або останню цифру числа, або останній символ числа. 
   * @param number 
   * @returns повертає останню цифру числа або останній символ числа
   */
  function getLastDigit(number:string|number):string|number{
    if(typeof number === 'number') return Math.abs(number%10)
    if(typeof number === 'string') return number[number.length-1]
    else {
      const _exhaustive:never = number
      throw new Error('Невідомий тип вхідних даних')
    }
  }
  const numberTypeNumber = 234
  const lastDigit = getLastDigit(numberTypeNumber)
  document.write(`Остання цифра числа ${numberTypeNumber}: ${lastDigit} <br/>`)

  const numberTypeString = '875'
  const lastDigitString = getLastDigit(numberTypeString)
  document.write(`Останній символ числа "${numberTypeString}": "${lastDigitString}"`)
}