import {generateId} from "../Utils/generateId.js"

export class Player{
    constructor(data){
        this.id = 'id'
        this.name = data.name
        this.score = 0
        // console.log('Player Model Fired')
    }

    get PlayerTemplate(){
        return `
        <h1>${this.name}</h1>
        `
    }
    get ActivePlayerTemplate() {
        return `
        <h2>${this.name}</h2>
        <h2 class = "" id="activeFruit"></h2>
        <form onsubmit="" >
            <input id="fruit-input" type="text" />
        </form>
    `
    }
}