import { Player } from "./Models/Player.js"
// import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])
  /** @type {import('./Models/Player.js').Player[]} */
  


    fruits = ['pear', 'apple', 'banana','kiwi','orange','plum','coconut','lemon', 'grapes', 'watermelon', 'cantalope','honeydew🍉']
    activeFruit = null



  players = [
    new Player({name: 'Chantha', score: 0}),
    new Player({name: 'Sam', score: 0})
  ]

  /** @type {import('./Models/Player.js').Player|null[]} */

  activePlayer = '';
} 



export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
