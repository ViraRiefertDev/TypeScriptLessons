export default class IdGenerator{
  static #INITID:number = -1
  static #currentId:number = this.#INITID
  static getNewId(){
    this.#currentId++
    return this.#currentId
  }
}