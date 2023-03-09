import GameInstanceInterface from "./GameInstanceInterface";

export default class GameInstance implements GameInstanceInterface {
  actualRoom: RoomEvent;
  player: Player;
  roomCount: number = 1;

  constructor(player: Player) {
    this.player = player
  }

  changeRoom(): void {
  }

  generateRoom(): void {
  }

}