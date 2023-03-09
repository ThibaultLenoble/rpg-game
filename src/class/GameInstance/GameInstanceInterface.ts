export default interface GameInstanceInterface {
  roomCount: number;
  player: Player;
  actualRoom: RoomEvent;

  generateRoom(): void;

  changeRoom(): void
}