import GameControllerInterface from "./GameControllerInterface";
import GameInstance from "../../class/GameInstance/GameInstance";
import Player from "../../class/Player/Player";

export default class GameController implements GameControllerInterface {
  gameInstance?: GameInstance;

  constructor(gameInstance?: GameInstance, inputValue?: string) {
    if (gameInstance) {
      this.gameInstance = gameInstance;
    } else {
      inputValue
        ? (this.gameInstance = new GameInstance(new Player(inputValue)))
        : null;
    }
  }

  setGameInstance(player: Player): void {
    this.gameInstance = new GameInstance(player);
  }

  validateInput(): void {}

  handleInput(inputValue: string) {
    return inputValue;
  }

 
}
