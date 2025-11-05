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
var _a, _IdGenerator_INITID, _IdGenerator_currentId;
class IdGenerator {
    static getNewId() {
        var _b;
        __classPrivateFieldSet(this, _a, (_b = __classPrivateFieldGet(this, _a, "f", _IdGenerator_currentId), _b++, _b), "f", _IdGenerator_currentId);
        return __classPrivateFieldGet(this, _a, "f", _IdGenerator_currentId);
    }
}
_a = IdGenerator;
_IdGenerator_INITID = { value: -1 };
_IdGenerator_currentId = { value: __classPrivateFieldGet(_a, _a, "f", _IdGenerator_INITID) };
export default IdGenerator;
