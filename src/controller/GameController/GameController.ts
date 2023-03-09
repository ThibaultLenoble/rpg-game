import GameControllerInterface from "./GameControllerInterface";
import GameInstance from "../../class/GameInstance/GameInstance";
import Player from "../../class/Player/Player";
import { displayAllRoleChoices, setRole } from "../../utils/RoleManager";

export default class GameController implements GameControllerInterface {
  gameInstance?: GameInstance;

  player?: Player

  setGameInstance(player: Player): void {
    this.gameInstance = new GameInstance(player);
  }

  validateNumericInput(inputValue: string): boolean {
    if (this.isNumeric(inputValue)) {
      return true;
    } else {
      console.error('Non numeric option')
      return false
    }
  }

  handleInput(inputValue: string) {
    if (this.gameInstance) {
      if(this.validateNumericInput(inputValue)) {
        this.gameInstance.handleChoice(parseFloat(inputValue) - 1)
      }
    } else {
      if (this.player) {
        if(this.validateNumericInput(inputValue)) {
          this.player = setRole(this.player, parseFloat(inputValue) - 1)
          this.setGameInstance(this.player)
        }
      } else {
        this.player = new Player(inputValue);
        document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML = displayAllRoleChoices()
      }
    }
  }

  isNumeric(str: string) {
    return !isNaN(parseFloat(str))
  }
}