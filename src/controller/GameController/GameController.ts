import GameControllerInterface from "./GameControllerInterface";
import GameInstance from "../../class/GameInstance/GameInstance";
import Player from "../../class/Player/Player";

export default class GameController implements GameControllerInterface {
  gameInstance?: GameInstance;

  setGameInstance(player: Player): void {
    this.gameInstance = new GameInstance(player);
  }

  validateNumericInput(inputValue: string): void {
    if (this.isNumeric(inputValue)) {
      if (this.gameInstance) {
        this.gameInstance.handleChoice(parseFloat(inputValue))
      }
    }
  }

  handleInput(inputValue: string) {
    if (this.gameInstance) {
      this.validateNumericInput(inputValue)
    } else {
      inputValue
        ? (this.gameInstance = new GameInstance(new Player(inputValue)))
        : null;
    }
  }
  isNumeric(str: string) {
    return !isNaN(parseFloat(str))
  }
}