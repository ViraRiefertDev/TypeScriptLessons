"use strict";
// Задача 2. Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), 
// airplane (швидкість, тип палива). Створити функцію, яка приймає параметр цього типу і виводить повну 
// інформацію про об'єкт. 
if (confirm('Почати тестування?')) {
    let FuelType;
    (function (FuelType) {
        FuelType[FuelType["JET_A"] = 0] = "JET_A";
        FuelType[FuelType["JET_B"] = 1] = "JET_B";
        FuelType[FuelType["AV_GAS"] = 2] = "AV_GAS";
        FuelType[FuelType["SAF"] = 3] = "SAF";
    })(FuelType || (FuelType = {}));
    function showVehicleInfo(vehicle) {
        switch (vehicle.vehicleType) {
            case 'car':
                document.write(`model: ${vehicle.model} - owner: ${vehicle.owner} <br/>`);
                break;
            case 'bus':
                document.write(`company: ${vehicle.company} - seatsNumber: ${vehicle.seats} <br/>`);
                break;
            case 'airplane':
                document.write(`speed: ${vehicle.speed} - fuelType: ${FuelType[vehicle.fuelType]}<br/>`);
                break;
            default:
                const _test = vehicle;
                throw new Error('Невідомий тип транспорту');
        }
    }
    const car1 = {
        vehicleType: 'car',
        model: 'Toyota Corolla',
        owner: 'Ivan Petrenko'
    };
    const bus1 = {
        vehicleType: 'bus',
        company: 'KyivBus',
        seats: 50
    };
    const airplane1 = {
        vehicleType: 'airplane',
        speed: 900,
        fuelType: FuelType.JET_A
    };
    // Виклики функції
    showVehicleInfo(car1);
    showVehicleInfo(bus1);
    showVehicleInfo(airplane1);
}
