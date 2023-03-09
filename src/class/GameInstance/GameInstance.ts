import GameInstanceInterface from "./GameInstanceInterface";
import RoomEvent from "../RoomEvent/RoomEvent";
import Player from "../Player/Player";
import {changeEvent} from "../../utils/RoomHandler";
import {dataEvents} from "../../datas/events";
import MainEvent from "../RoomEvent/MainEvent";

export default class GameInstance implements GameInstanceInterface {
  actualRoom?: RoomEvent | undefined;
  player: Player;

  mainEvent: MainEvent = dataEvents.mainEvents[0]
  roomCount: number = 0;

  maxRoom: number = 10;

  healMinValue: number = 10;
  coinMinValue: number = 50;
  chestMinDamageValue: number = 5;
  levelMultiplicator: number = 2;

  constructor(player: Player) {
    this.player = player;
    this.actualRoom = changeEvent();
    this.roomCount++;
    this.dipslayEquipment();
  }

  changeRoom(): void {
    this.roomCount++;
    if (this.roomCount > 10) {
      this.endGame(true);
    } else {
      console.log("change de salle");
      this.actualRoom = changeEvent();
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
      case "chest-heal":
        hasCase = true;
        let heal = this.healMinValue * (this.player.level * this.levelMultiplicator) * this.randomIntFromInterval(1, 4)
        this.player.heal(heal);
        this.mainEvent.outputContext = `Vous avez été soigné de ${heal} PV.`
        this.actualRoom = changeEvent(this.mainEvent);
        break;
      case "chest-hit":
        hasCase = true;
        let damage = this.chestMinDamageValue * (this.player.level * this.levelMultiplicator) * this.randomIntFromInterval(1, 4)
        this.player.takeHit(damage);

        if (this.player.currentLife <= 0){
          this.endGame(false)
        } else {
          this.mainEvent.outputContext = `Vous avez subi ${damage} dégats.`
          this.actualRoom = changeEvent(this.mainEvent);
        }
        break;
      case "chest-earn-money":
        hasCase = true;
        let money = this.coinMinValue * (this.player.level * this.levelMultiplicator) * this.randomIntFromInterval(1, 4);
        this.player.earnMoney(money);
        this.mainEvent.outputContext = `Vous avez gagné ${money} pièces.`
        this.actualRoom = changeEvent(this.mainEvent);
        break;
      case "exchange":
        hasCase = true;
        this.actualRoom = changeEvent(dataEvents.mainEvents[0]);
        break;
      default:
        if (!hasCase) {
          console.error("L'évènement n'existe pas");
        }
        break;
    }
  }

  getRandomEvent(): RoomEvent {
    const randomEvent =
      dataEvents[Math.floor(Math.random() * dataEvents.length)];
    return randomEvent;
  }

  getRandomChoicesAccordingToEvent(event: RoomEvent): RoomEvent {
    switch (event.constructor.name) {
      case "RoomEvent":
        break;
      case "EnigmaEvent":
        break;
      case "FightEvent":
        break;
      case "ExchangeEvent":
        break;
      default:
        console.error("L'évènement n'existe pas ou n'a pas de type");
        break;
    }
  }

  dipslayEquipment() {
    document.querySelector<HTMLDivElement>(
      ".life__player"
    )!.innerHTML = `${this.player.currentLife}/${this.player.maxLife} PV`;
  }

  endGame(isWin: boolean = false): void {
    console.log("Fin du jeu");
    if (isWin) {
      document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML =
        "Le jeu est fini. Vous avez gagné !!! 🥳🥳🥳🥳🥳🥳";
    } else {
      document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML =
        "Le jeu est fini. Vous avez perdu !!!";
    }
  }

  randomIntFromInterval(min: number, max: number): number { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
