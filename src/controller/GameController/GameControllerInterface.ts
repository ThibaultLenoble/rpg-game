import GameInstance from "../../class/GameInstance/GameInstance";
import Player from "../../class/Player/Player";

export default interface GameControllerInterface {
  gameInstance?: GameInstance;

  setGameInstance(player: Player): void

  validateInput(): void
}