"use strict";
// Задача 4. Випадковим чином генерується масив номерів робочих днів, або назв вихідних, або назв святкових днів. 
// Підрахувати чого було більше: святкових чи вихідних.
if (confirm('Почати тестування?')) {
    function getRandomNumber(minNum, maxNum) {
        return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
    }
    function getRandomDay() {
        const randomDayType = getRandomNumber(1, 3);
        let randomIndex;
        switch (randomDayType) {
            case 1:
                return getRandomNumber(1, 5);
            case 2:
                const HOLIDAYS = ['NewYear', 'Christmas', 'Easter', 'ThanksGiving'];
                randomIndex = getRandomNumber(0, HOLIDAYS.length - 1);
                return HOLIDAYS[randomIndex];
            default:
                const WEEKENDS = ['Saturday', 'Sunday'];
                randomIndex = getRandomNumber(0, WEEKENDS.length - 1);
                return WEEKENDS[randomIndex];
        }
    }
    const randomDaysArray = [];
    const LENGTH_OF_ARRAY = 20;
    for (let i = 0; i < LENGTH_OF_ARRAY; i++) {
        randomDaysArray.push(getRandomDay());
    }
    let numberOfWeekendDays = 0;
    let numberOfHolidays = 0;
    randomDaysArray.forEach(day => {
        if (typeof day !== 'number') {
            if (day === 'Saturday' || day === 'Sunday') {
                numberOfWeekendDays++;
            }
            else {
                numberOfHolidays++;
            }
        }
    });
    const resultMsg = `Вихідних днів ${numberOfWeekendDays === numberOfHolidays
        ? 'так само як'
        : numberOfWeekendDays > numberOfHolidays
            ? 'більше'
            : 'менше'} за кількість святкових`;
    document.write(randomDaysArray.toString() + '<hr/>');
    document.write(`
      Кількість вихідних днів : ${numberOfWeekendDays}<br/>
      Кількість святкових днів: ${numberOfHolidays}<br/>
      ${resultMsg}
      `);
}
