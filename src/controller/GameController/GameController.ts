import GameControllerInterface from "./GameControllerInterface";
import GameInstance from "../../class/GameInstance/GameInstance";
import Player from "../../class/Player/Player";

export default class GameController implements GameControllerInterface {
  gameInstance?: GameInstance;

  setGameInstance(player: Player): void
  {
    this.gameInstance = new GameInstance(player);
  }

  validateNumericInput(inputValue: string): void {
    if (this.isNumeric(inputValue)) {
      if (this.gameInstance) {
        this.gameInstance.handleChoice(parseFloat(inputValue))
      }
    }
  }

  isNumeric(str: string) {
    return !isNaN(parseFloat(str))
  }
}