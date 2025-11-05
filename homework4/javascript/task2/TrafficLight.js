var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _TrafficLight_currentState, _TrafficLight_isInTransition;
import LightColor from "./LightColor.js";
const YELLOW_DURATION = 2000;
class TrafficLight {
    constructor() {
        _TrafficLight_currentState.set(this, LightColor.RED);
        _TrafficLight_isInTransition.set(this, false);
    }
    get CurrentState() {
        return __classPrivateFieldGet(this, _TrafficLight_currentState, "f");
    }
    changeState() {
        if (__classPrivateFieldGet(this, _TrafficLight_isInTransition, "f"))
            return; //якщо в процесі переключення коліру то ігноруємо виклик метода
        const target = __classPrivateFieldGet(this, _TrafficLight_currentState, "f") === LightColor.RED ? LightColor.GREEN : LightColor.RED;
        __classPrivateFieldSet(this, _TrafficLight_isInTransition, true, "f");
        __classPrivateFieldSet(this, _TrafficLight_currentState, LightColor.YELLOW, "f");
        setTimeout(() => {
            __classPrivateFieldSet(this, _TrafficLight_currentState, target, "f");
            __classPrivateFieldSet(this, _TrafficLight_isInTransition, false, "f");
        }, YELLOW_DURATION);
    }
}
_TrafficLight_currentState = new WeakMap(), _TrafficLight_isInTransition = new WeakMap();
export default TrafficLight;
