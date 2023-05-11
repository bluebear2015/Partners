import { PlayerController } from "./Controllers/PlayerController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  playerController = new PlayerController()
}

window["app"] = new App();
