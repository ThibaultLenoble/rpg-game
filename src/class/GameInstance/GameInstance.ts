import GameInstanceInterface from "./GameInstanceInterface";
import RoomEvent from "../RoomEvent/RoomEvent";
import Player from "../player/Player";

export default class GameInstance implements GameInstanceInterface {
  actualRoom: RoomEvent | undefined;
  player: Player;
  roomCount: number = 1;

  constructor(player: Player) {
    this.player = player;
    this.generateRoom();
  }

  changeRoom(): void {}

  generateRoom(): void {}
}
