import Player from "../Player/Player";
import RoomEvent from "../RoomEvent/RoomEvent";

export default interface GameInstanceInterface {
  roomCount: number;
  player: Player;
  actualRoom?: RoomEvent;

  maxRoom: number;

  changeRoom(): void;
}
