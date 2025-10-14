"use strict";
// Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата). 
// Створити функції для перевірки цього типу (Type Guard, Assert)
if (confirm('Почати тестування?')) {
    function isTicket(value) {
        return !!value && typeof value === 'object' && ['destination', 'price', 'passengerFullName', 'date'].every(key => key in value);
    }
    function assertIsTicket(value) {
        if (!(!!value && typeof value === 'object' && ['destination', 'price', 'passengerFullName', 'date'].every(key => key in value))) {
            throw new Error('Invalid type');
        }
    }
    const ticket = {
        destination: 'Kiev',
        price: 896,
        passengerFullName: 'Vira Riefert',
        date: new Date()
    };
    try {
        assertIsTicket(ticket);
        console.log('Перевірка через assert пройшла успішно!');
    }
    catch (error) {
        if (error instanceof Error)
            alert(error.message);
        else
            alert(error);
    }
    if (isTicket(ticket)) {
        document.write(`
      <div style="
        font-family: 'Arial', sans-serif;
        background: linear-gradient(135deg, #fff8e6, #fdfdfd);
        border: 2px dashed #ff9900;
        border-radius: 15px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        width: 360px;
        margin: 40px auto;
        padding: 20px 25px;
        position: relative;
      ">
        <h2 style="text-align:center; margin:0 0 10px; color:#ff6600;">🎟️ Travel Ticket</h2>
        <hr style="border:none; border-top:1px dashed #ccc; margin:10px 0;">
        <p style="margin:6px 0;"><strong>Destination:</strong> ${ticket.destination}</p>
        <p style="margin:6px 0;"><strong>Passenger:</strong> ${ticket.passengerFullName}</p>
        <p style="margin:6px 0;"><strong>Price:</strong> ${ticket.price} ₴</p>
        <p style="margin:6px 0;"><strong>Date:</strong> ${ticket.date.toLocaleDateString()} ${ticket.date.toLocaleTimeString()}</p>
        <hr style="border:none; border-top:1px dashed #ccc; margin:10px 0;">
        <p style="text-align:center; font-size:12px; color:#888;">Have a nice trip! ✈️</p>
        <div style="
          position:absolute;
          top:50%;
          right:-12px;
          transform:translateY(-50%);
          width:24px;
          height:24px;
          background:#fff;
          border:2px solid #ff9900;
          border-radius:50%;
        "></div>
      </div>
    `);
    }
    else {
        document.write(`
      <p style="color:red; font-family:Arial;">❌ Об'єкт не відповідає типу Ticket</p>
    `);
    }
}
