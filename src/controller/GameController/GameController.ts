import GameControllerInterface from "./GameControllerInterface";
import GameInstance from "../../class/GameInstance/GameInstance";
import Player from "../../class/Player/Player";
import Weapon from "../../class/Weapon/Weapon";

export default class GameController implements GameControllerInterface {
  gameInstance?: GameInstance;

  setGameInstance(player: Player): void {
    this.gameInstance = new GameInstance(player);
  }

  validateNumericInput(inputValue: string): void {
    if (this.isNumeric(inputValue)) {
      if (this.gameInstance) {
        this.gameInstance.handleChoice(parseFloat(inputValue) - 1);
      }
    } else {
      console.error("Non numeric option");
    }
  }

  handleInput(inputValue: string) {
    if (this.gameInstance) {
      this.validateNumericInput(inputValue);
    } else {
      inputValue
        ? this.setGameInstance(
            new Player(
              inputValue,
              12,
              50,
              new Weapon("dagger", 20),
              "mage noir",
              5,
              1000
            )
          )
        : null;
    }
  }

  isNumeric(str: string) {
    return !isNaN(parseFloat(str));
  }
}
