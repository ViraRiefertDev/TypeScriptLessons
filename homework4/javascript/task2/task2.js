// 2. Моделювання Світлофора 🚦
// Клас: TrafficLight (Світлофор). 
// Містить поле currentState і метод changeState(), який переключає світло 
// на наступний дозволений колір.
// Enum: LightColor (КолірСвітла). 
// Визначає фіксовані кольори: RED (Червоний), YELLOW (Жовтий), GREEN (Зелений).
import TrafficLight from "./TrafficLight.js";
import LightColor from "./LightColor.js";
if (confirm('Почати тестування?')) {
    const t1 = new TrafficLight();
    console.log(LightColor[t1.CurrentState]);
    t1.changeState();
    console.log(LightColor[t1.CurrentState]);
    setTimeout(() => {
        console.log(LightColor[t1.CurrentState]);
        t1.changeState();
        console.log(LightColor[t1.CurrentState]);
        setTimeout(() => {
            console.log(LightColor[t1.CurrentState]);
        }, 2500);
    }, 2500);
}
