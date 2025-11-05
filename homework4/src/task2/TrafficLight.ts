import LightColor from "./LightColor.js"
const YELLOW_DURATION = 2000

export default class TrafficLight{
    #currentState:LightColor=LightColor.RED
    #isInTransition = false

    public get CurrentState(){
      return this.#currentState
    }
    
    public changeState(){
      if(this.#isInTransition) return //якщо в процесі переключення коліру то ігноруємо виклик метода
      const target = this.#currentState === LightColor.RED ? LightColor.GREEN:LightColor.RED
      this.#isInTransition = true
      this.#currentState = LightColor.YELLOW
      setTimeout(()=>{
        this.#currentState = target
        this.#isInTransition = false
      },YELLOW_DURATION)
    }
  }