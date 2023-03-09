import GameInstanceInterface from "./GameInstanceInterface";
import RoomEvent from "../RoomEvent/RoomEvent";
import Player from "../Player/Player";
import { changeRoom as roomChanger } from "../../utils/RoomHandler";

export default class GameInstance implements GameInstanceInterface {
  actualRoom?: RoomEvent | undefined;
  player: Player;
  roomCount: number = 0;

  maxRoom: number = 10;

  constructor(player: Player) {
    this.player = player;
    this.actualRoom = roomChanger();
    this.roomCount++;
  }

  changeRoom(): void {
    this.roomCount++;
    if (this.roomCount > 10) {
      this.endGame();
    } else {
      console.log("change de salle");
      this.actualRoom = roomChanger();
      document.querySelector<HTMLDivElement>(
        ".prompt__room-advance"
      )!.innerHTML = `${this.roomCount}/${this.maxRoom}`;
    }
  }

  handleChoice(choiceIndex: number): void {
    if (this.actualRoom) {
      if (this.actualRoom.isChoiceExist(choiceIndex)) {
        let choice = this.actualRoom.getChoice(choiceIndex);
        this.handleEvent(choice.action);
      } else {
        // Le choix n'existe pas
        console.error("Le choix n'existe pas");
      }
    }
  }

  handleEvent(eventSlug: string) {
    let hasCase = false;
    switch (eventSlug) {
      case "get-out":
        hasCase = true;
        this.changeRoom();
        break;
      default:
        if (!hasCase) {
          console.error("L'évènement n'existe pas");
        }
        break;
    }
  }

  endGame(): void {
    console.log("Fin du jeu");
    document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML = "Le jeu est fini. Vous avez gagné !!! 🥳🥳🥳🥳🥳🥳";
  }
}
