// Описати тип «журнал учня» (3 поля-масиви з оцінками ). 
// Потім на основі цього типу створити тип «менеджер оцінок» 
// (додати методи знаходження середньої оцінки і найбільшої оцінки)


if (confirm('Почати тестування?')) {
  function getSumOfArrayNumbers(arr:number[]):number{
    return arr.reduce((prevSum,number)=>prevSum+number,0)
  }
  function getBiggestNumberOfArray(arr:number[]):number{
    return arr.reduce((prevMax,number)=>prevMax>number?prevMax:number)
  }
  function getAllGrades(s: StudentLogbook): number[] {
    return [...s.math, ...s.physics, ...s.biology]
  }

  type StudentLogbook = {
    math:number[];
    physics:number[];
    biology:number[];
  }

  type GradeTracker = StudentLogbook & {
    getAvarage(this:GradeTracker):number
    getBiggestNote(this:GradeTracker):number
  }

  const gradeTracker:GradeTracker = {
    math:[11,6,7,10],
    physics: [8,8,10,5,7],
    biology: [6,8,12],

    getAvarage(){
      const all = getAllGrades(this)
      return (getSumOfArrayNumbers(all))/(all.length)
    },
    getBiggestNote(){
      return getBiggestNumberOfArray(getAllGrades(this))
    }
  }
  const avarage = gradeTracker.getAvarage()
  const maxNote = gradeTracker.getBiggestNote()
  document.write(`
    <div style="font-family:Arial;max-width:420px;margin:24px auto;padding:16px;border:1px solid #e5e5e5;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.06)">
      <h2 style="margin:0 0 10px;">📘 Журнал учня</h2>
      <p style="margin:6px 0;"><strong>Математика:</strong> ${gradeTracker.math.join(', ')}</p>
      <p style="margin:6px 0;"><strong>Фізика:</strong> ${gradeTracker.physics.join(', ')}</p>
      <p style="margin:6px 0;"><strong>Біологія:</strong> ${gradeTracker.biology.join(', ')}</p>
      <hr style="border:none;border-top:1px solid #eee;margin:12px 0;">
      <p style="margin:6px 0;"><strong>Середня оцінка:</strong> ${avarage.toFixed(2)}</p>
      <p style="margin:6px 0;"><strong>Найбільша оцінка:</strong> ${maxNote}</p>
    </div>
  `)
}




