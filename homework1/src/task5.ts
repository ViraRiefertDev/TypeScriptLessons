// Випадковим чином 10 разів генерується число або рядок «Ок». 
// Пірахувати чого було більше чисел чи рядків і вивести останнє значення


if (confirm('Почати тестування?')) {
  function getRandomString(){
    const stringsArray = ['dog', 'cat', 'elephant', 'tiger', 'lion', 'bear', 'horse']
    const randomIndex = Math.floor(Math.random()*stringsArray.length)
    return stringsArray[randomIndex]
  }
  function getRandomNumber():number{
    return Math.floor(1+Math.random()*100)
  }
  let numberCount = 0
  let stringCount = 0
  let val:string | number=''
  for(let i=0;i<10;i++){
    const randomChoise = Math.floor(Math.random()*2)
    switch (randomChoise) {
      case 0: val=getRandomString()
        break;
      case 1: val = getRandomNumber()
        break;
    }
    if(typeof val === 'number') numberCount++
    else stringCount++
  }

  document.write(`
    ${stringCount>numberCount ? 'Рядків було більше': stringCount<numberCount ? 'Чисел було більше': 'Однакова кількість'} <br/>
    Останнє значення: ${val}
    `)
}