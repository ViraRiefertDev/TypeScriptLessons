"use strict";
// Вводиться номер дня або назва дня. Створити функцію, 
// яка за цим значенням виводить на екран чи це робочий день.
if (confirm('Почати тестування?')) {
    const workDays = ['mon', 'tue', 'wed', 'thu', 'fri', 1, 2, 3, 4, 5];
    const weekendDays = ['sat', 'sun', 6, 7];
    let userDay = prompt('Введіть назву (mon/tue/wed/thu/fri/sat/sun) дня або номер дня (1-7)');
    let resultHtml = '';
    if (!isNaN(parseInt(userDay))) {
        userDay = parseInt(userDay);
    }
    // Перший варіант
    // switch (userDay) {
    //     case 'mon':
    //     case 'tue':
    //     case 'wed':
    //     case 'thu':
    //     case 'fri':
    //     case 1:
    //     case 2:
    //     case 3:
    //     case 4:
    //     case 5: resultHtml='Це робочий день'
    //       break;
    //     case 6:
    //     case 7:
    //     case 'sat':
    //     case 'sun': resultHtml='Це вихідний день'  
    //     break;
    //     default: resultHtml = 'Ве ввели не вірну назву або номер дня'
    //       break;
    //   }
    //Другий варіант
    if (workDays.includes(userDay)) {
        resultHtml = 'Це робочий день';
    }
    else if (weekendDays.includes(userDay)) {
        resultHtml = 'Це вихідний день';
    }
    else {
        resultHtml = 'Ви ввели не вірну назву або номер дня';
    }
    document.write(resultHtml);
}
