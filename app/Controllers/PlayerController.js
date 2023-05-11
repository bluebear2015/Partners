import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playerService } from "../Services/PlayerService.js";
import { getFormData} from "../Utils/FormHandler.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawPlayer() {
    // console.log('this is my template');
    let players = appState.players;
    // console.log(players);
    let template = ''
    players.forEach(p => template += p.PlayerTemplate)
    // console.log('player template', template);
    setHTML('players', template)
    }

    function _drawFruit(){
        setText('activeFruit', appState.activeFruit)
    }
    

export class PlayerController{
    constructor(){
        console.log("Player Controller")
        _drawPlayer()  
        appState.on('activeFruit', _drawFruit)
    }    
    setPlayer(){
        window.event.preventDefault()
        const form = window.event.target;
        console.log('name:', form.name.value);
        appState.activePlayer = form.name.value;
        console.log("The active player is:", appState.activePlayer)
        let newPlayer = new Player({name: form.name.value})
        appState.players.push(newPlayer)
        console.log(appState.players)
        _drawPlayer()
    }
    setFruit(){
        let randomFruit = Math.floor(Math.random() * appState.fruits.length);
        console.log(appState.fruits[randomFruit])
        appState.activeFruit = appState.fruits[randomFruit]
        _drawFruit()
    }
}

