"use strict";
// Описати тип квиток (куди, ціна, піб пасажира, дата). 
// Створити функції для перевірки цього типу (Type Guard, Assert)
if (confirm('Почати тестування?')) {
    function isObject(value) {
        return typeof value === 'object' && value !== null;
    }
    function isValidDate(value) {
        return value instanceof Date && !Number.isNaN(value.getTime());
    }
    function isTicket(value) {
        if (!isObject(value))
            return false;
        const destination = value.destination;
        const price = value.price;
        const passengerName = value.passengerName;
        const date = value.date;
        const okDestination = typeof destination === 'string' && destination.trim().length > 0;
        const okPrice = typeof price === 'number' && Number.isFinite(price) && price >= 0;
        const okName = typeof passengerName === 'string' && passengerName.trim().length > 0;
        const okDate = isValidDate(date);
        return okDestination && okPrice && okName && okDate;
    }
    function assertIsTicket(value) {
        if (!isTicket(value)) {
            throw new Error("Об'єкт не відповідає типу Ticket");
        }
    }
    try {
        const ticket = { destination: 'Kyiv', price: 500, passengerName: 'Vira Riefert', date: new Date() };
        if (isTicket(ticket)) {
            console.log(`Об'єкт пройшов перевірку guard:${ticket.date.toISOString()}: ${ticket.passengerName}, destination: ${ticket.destination}`);
        }
        assertIsTicket(ticket);
        console.log(`Об'єкт пройшов перевірку asserts PassengerName: ${ticket.passengerName}`);
        const ticket2 = { destination: 'Kyiv', price: 500, passengerName: 'Vira Riefert', date: '22.03.1994' };
        if (isTicket(ticket2)) {
            console.log(`Об'єкт пройшов перевірку guard:${ticket2.date.toISOString()}: ${ticket2.passengerName}, destination: ${ticket2.destination}`);
        }
        else {
            console.log(`Об'єкт НЕ пройшов перевірку guard!:`);
        }
        assertIsTicket(ticket2);
        console.log(`Об'єкт пройшов перевірку asserts PassengerName: ${ticket2.passengerName}`);
    }
    catch (error) {
        console.error(error);
    }
}
