// Створіть union-тип для трьох типів : 
// car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива). 
// Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт.

if (confirm('Почати тестування?')) {
  type Vehicle = 
    | {type:'car'; model:string; owner:string}
    | {type: 'bus'; company:string; seats: number}
    | {type: 'airplane'; speed:number; fuelType:string}


  function printVehicleInfo(vehicle:Vehicle){
    let vehicleInfo = ''
    switch (vehicle.type) {
      case 'car':
        vehicleInfo = `🚗 ${vehicle.type[0].toUpperCase()+vehicle.type.slice(1,vehicle.type.length)} model: ${vehicle.model}, owner: ${vehicle.owner}`
        break;
      case 'bus':
        vehicleInfo = `🚌 Bus company: ${vehicle.company}, seats: ${vehicle.seats}`
        break;
      case 'airplane':
        vehicleInfo = `✈️ Airplane speed: ${vehicle.speed}, fuelType: ${vehicle.fuelType}`
        break;
      default:
        const _exhaustive:never = vehicle
        throw new Error(`Unknown vehicle type ${vehicle}`)
    }
    document.write(`${vehicleInfo}<br/>`)

  }

  const car:Vehicle = {type:'car', model:'BMW X5', owner:'Artemij'}
  const bus:Vehicle = {type:'bus', company:'FlixBus', seats:50}
  const airplane:Vehicle = {type:'airplane', speed:900, fuelType:'kersoine'}

  printVehicleInfo(car)
  printVehicleInfo(bus)
  printVehicleInfo(airplane)
}