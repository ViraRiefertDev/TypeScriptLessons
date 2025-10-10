"use strict";
//  Дано масив маркерів на карті  [lat, long, city]. Визначити найближче місто до вказаних координат
if (confirm('Почати тестування?')) {
    function getDistanceBtwCities([lat1, lon1], [lat2, lon2]) {
        const dx = lat1 - lat2;
        const dy = lon1 - lon2;
        return Math.hypot(dx, dy);
    }
    function getClosestPlace(target, markers) {
        if (markers.length === 0)
            throw new Error('Список міст порожній');
        let best = markers[0];
        let bestDist = getDistanceBtwCities(target, [best[0], best[1]]);
        for (let i = 1; i < markers.length; i++) {
            const d = getDistanceBtwCities(target, [markers[i][0], markers[i][1]]);
            if (d < bestDist) {
                best = markers[i];
                bestDist = d;
            }
        }
        return best;
    }
    function getMarkersList(markersNumber) {
        const markersList = [];
        for (let i = 0; i < markersNumber; i++) {
            const raw = prompt('Введіть lat long city (через пробіл)');
            if (!raw)
                throw new Error('Скасовано користувачем');
            const [latStr, lonStr, city] = raw.trim().split(/\s+/);
            const lat = Number(latStr);
            const lon = Number(lonStr);
            if (!Number.isFinite(lat) || !Number.isFinite(lon) || !city)
                throw new Error('Невірний формат. Приклад: 50.45 30.52 Kyiv');
            markersList.push([lat, lon, city]);
        }
        return markersList;
    }
    try {
        const rawTarget = prompt('Введіть координати поточного міста: lat long');
        if (!rawTarget)
            throw new Error('Скасовано користувачем');
        const [tLatStr, tLonStr] = rawTarget.trim().split(/\s+/);
        const target = [Number(tLatStr), Number(tLonStr)];
        if (!Number.isFinite(target[0]) || !Number.isFinite(target[1]))
            throw new Error('Невірні координати поточного міста');
        const COUNT_OF_CITIES = 3;
        const markers = getMarkersList(COUNT_OF_CITIES);
        const [lat, lon, city] = getClosestPlace(target, markers);
        document.write(`
    Поточні координати: [${target[0]}, ${target[1]}]<br/>
    Найближче місто: <strong>${city}</strong> (${lat}, ${lon})
  `);
    }
    catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        alert(`Помилка: ${msg}`);
    }
}
