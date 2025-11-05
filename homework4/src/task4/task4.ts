// Задача 2. Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), 
// airplane (швидкість, тип палива). Створити функцію, яка приймає параметр цього типу і виводить повну 
// інформацію про об'єкт. 

if (confirm('Почати тестування?')){
  enum FuelType {
    JET_A,
    JET_B,
    AV_GAS,
    SAF
  }

  type Car = {
    vehicleType:'car',
    model:string
    owner:string
  }
  type Bus  ={
    vehicleType:'bus',
    company:string
    seats:number
  }
  type AirPlane = {
    vehicleType:'airplane',
    speed:number
    fuelType:FuelType
  }
  type Vehicle = Car | Bus | AirPlane

  function showVehicleInfo(vehicle:Vehicle){
    switch (vehicle.vehicleType) {
      case 'car':
        document.write(`model: ${vehicle.model} - owner: ${vehicle.owner} <br/>`)
        break;
      case 'bus':
        document.write(`company: ${vehicle.company} - seatsNumber: ${vehicle.seats} <br/>`)
        break;
      case 'airplane':
        document.write(`speed: ${vehicle.speed} - fuelType: ${FuelType[vehicle.fuelType]}<br/>`) 
        break;
      default:
        const _test:unknown = vehicle
        throw new Error('Невідомий тип транспорту')
    }
  }

  const car1: Car = {
    vehicleType: 'car',
    model: 'Toyota Corolla',
    owner: 'Ivan Petrenko'
  }

  const bus1: Bus = {
    vehicleType: 'bus',
    company: 'KyivBus',
    seats: 50
  }

  const airplane1: AirPlane = {
    vehicleType: 'airplane',
    speed: 900,
    fuelType: FuelType.JET_A
  }

// Виклики функції
showVehicleInfo(car1)
showVehicleInfo(bus1)
showVehicleInfo(airplane1)
}