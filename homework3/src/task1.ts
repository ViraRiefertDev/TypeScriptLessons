// Створити два інтерфейси студента (піб, курс, факультет). 
// На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи).
if (confirm('Почати тестування?')) {
  interface IStudent{
    fullName: {
      lastName:string,
      firstName:string,
      patronymic:string,
    }
    course: number,
    faculty:string,
  }
  interface IGroupLead extends IStudent{
    groupNumber:string
  }

  const groupLead1:IGroupLead = {
    fullName:{
      lastName:'Popova',
      firstName: 'Claudia',
      patronymic: 'Sergijivna'
    },
    course: 2,
    faculty: 'Physics',
    groupNumber: '2b'
  }

  const student1:IStudent={
    fullName:{
      lastName:'Ivanov',
      firstName: 'Pavlo',
      patronymic: 'Artemovich'
    },
    course:3,
    faculty: 'Biologie'
  }

  document.write(`
  <div style="
    display: flex;
    gap: 20px;
    font-family: sans-serif;
  ">

    <!-- Карточка старости -->
    <div style="
      border: 2px solid #444;
      border-radius: 10px;
      padding: 15px;
      width: 250px;
      background-color: #f7f7f7;
    ">
      <h3 style="margin-top:0;">👩‍🎓 Староста групи</h3>
      <p><strong>ПІБ:</strong> ${groupLead1.fullName.lastName} ${groupLead1.fullName.firstName} ${groupLead1.fullName.patronymic}</p>
      <p><strong>Курс:</strong> ${groupLead1.course}</p>
      <p><strong>Факультет:</strong> ${groupLead1.faculty}</p>
      <p><strong>Номер групи:</strong> ${groupLead1.groupNumber}</p>
    </div>

    <!-- Карточка студента -->
    <div style="
      border: 2px solid #444;
      border-radius: 10px;
      padding: 15px;
      width: 250px;
      background-color: #f0faff;
    ">
      <h3 style="margin-top:0;">🎓 Студент</h3>
      <p><strong>ПІБ:</strong> ${student1.fullName.lastName} ${student1.fullName.firstName} ${student1.fullName.patronymic}</p>
      <p><strong>Курс:</strong> ${student1.course}</p>
      <p><strong>Факультет:</strong> ${student1.faculty}</p>
    </div>

  </div>
`)
}