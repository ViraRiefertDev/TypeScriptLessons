// Задача 3. Задача “Події календаря”. 
// Події можуть бути Meeting (має participants), Deadline (має dueDate), 
// Reminder (має note). Кожна подія може бути mandatory або optional. 
// Створити тип CalendarEvent, який об’єднує тип події та її важливість, 
// використовуючи перетини та об’єднання типів.

if (confirm('Почати тестування?')) {
  type Meeting = {type:'meeting'; participants:number}
  type Deadline = {type:'deadline'; dueDate:Date}
  type Reminder = {type:'reminder'; note:string}

  type EventImportance = {importance:'mandatory' | 'optional'}

  type CalendarEvent = (Meeting | Deadline | Reminder) & EventImportance

  const teamMeating:CalendarEvent={
    type:'meeting',
    participants:34,
    importance:'mandatory'
  }
  const taskDeadline:CalendarEvent={
    type:'deadline',
    dueDate: new Date('05.12.2025'),
    importance:'mandatory'
  }
  const birthdayReminder:CalendarEvent={
    type:'reminder',
    note: 'Buy a cake 🎂',
    importance:'optional'
  }

  const events:CalendarEvent[] = [teamMeating,taskDeadline,birthdayReminder]
  document.write(`<h2 style="font-family:sans-serif;">📅 Календар подій</h2>`)
  document.write(`<div style="display:flex; gap:20px; flex-wrap:wrap; font-family:sans-serif;">`)

  for(const event of events){
    let details=''
    switch (event.type) {
      case 'meeting':
        details = `👥 Учасників: ${event.participants}`
        break;
      case 'deadline':
        details = `⏰ Дата дедлайну: ${event.dueDate.toLocaleDateString()}`
        break
      case 'reminder':
        details = `📝 Нотатка: ${event.note}`
        break
      default:
        const _exhaustive:never = event
        throw new Error(`Невідомий тип події: ${event}`)
    }
    document.write(`
      <div style="
        border: 2px solid #555;
        border-radius: 10px;
        padding: 15px 20px;
        background-color: #f8f8f8;
        width: 250px;
        box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
      ">
        <h3 style="margin-top:0;">${event.type.toUpperCase()}</h3>
        <p>${details}</p>
        <p><strong>Важливість:</strong> ${event.importance === 'mandatory' ? '🔴 Обов’язкова' : '🟢 Необов’язкова'}</p>
      </div>
    `)
  }
  document.write(`</div>`)
}
