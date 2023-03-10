import RoomEvent from "../RoomEvent/RoomEvent";
import Player from "../Player/Player";
import { changeEvent } from "../../utils/EventHandler";
import { dataEvents } from "../../datas/events";
import MainEvent from "../RoomEvent/MainEvent";
import ExchangeChoice from "../Choice/ExchangeChoice";
import Choice from "../Choice/Choice";

export default class GameInstance {
  actualRoom?: RoomEvent | undefined;
  player: Player;

  mainEvent: MainEvent = dataEvents.mainEvents[0];
  roomCount: number = 0;

  maxRoom: number = 15;

  healMinValue: number = 10;
  coinMinValue: number = 50;
  chestMinDamageValue: number = 5;
  levelMultiplicator: number = 2;

  constructor(player: Player) {
    this.player = player;
    this.actualRoom = changeEvent(dataEvents.mainEvents[1]);
    this.dipslayEquipment();
  }

  changeRoom(): void {
    this.roomCount++;
    if (this.roomCount > 10) {
      this.endGame(true);
    } else {
      console.log("change de salle");
      this.actualRoom = changeEvent(undefined);
      document.querySelector<HTMLDivElement>(
        ".prompt__room-advance"
      )!.innerHTML = `${this.roomCount}/${this.maxRoom}`;
    }
  }

  handleChoice(choiceIndex: number): void {
    if (this.actualRoom) {
      if (this.actualRoom.isChoiceExist(choiceIndex)) {
        let choice = this.actualRoom.getChoice(choiceIndex);
        this.handleAction(choice);
      } else {
        document.querySelector<HTMLDivElement>(
          ".prompt__error"
        )!.innerHTML = `Erreur : l'option n'existe pas`;
      }
    }
  }

  handleAction(choice: Choice | ExchangeChoice) {
    let hasCase = false;
    switch (choice.action) {
      case "get-out":
        hasCase = true;
        this.changeRoom();
        break;
      case "chest-heal":
        hasCase = true;
        let heal =
          this.healMinValue *
          (this.player.level * this.levelMultiplicator) *
          this.randomIntFromInterval(1, 4);
        this.player.heal(heal);
        this.mainEvent.outputContext = `Vous avez été soigné de ${heal} PV.`;
        this.actualRoom = changeEvent(this.mainEvent);
        break;
      case "chest-hit":
        hasCase = true;
        let damage =
          this.chestMinDamageValue *
          (this.player.level * this.levelMultiplicator) *
          this.randomIntFromInterval(1, 4);
        this.player.takeHit(damage);

        if (this.player.currentLife <= 0) {
          this.endGame(false);
        } else {
          this.mainEvent.outputContext = `Vous avez subi ${damage} dégats.`;
          this.actualRoom = changeEvent(this.mainEvent);
        }
        break;
      case "chest-earn-money":
        hasCase = true;
        let money =
          this.coinMinValue *
          (this.player.level * this.levelMultiplicator) *
          this.randomIntFromInterval(1, 4);
        this.player.earnMoney(money);
        this.mainEvent.outputContext = `Vous avez gagné ${money} pièces.`;
        this.actualRoom = changeEvent(this.mainEvent);
        break;
      case "exchange":
        hasCase = true;
        let isExchangeOk = false;
        if (choice instanceof ExchangeChoice) {
          let exchangeAction = this.player.exchangeAction(
            choice.needed.type,
            choice.needed.amount
          );
          if (exchangeAction) {
            isExchangeOk = true;
            this.mainEvent.outputContext =
              exchangeAction +
              ", " +
              this.player.exchangeAction(
                choice.giving.type,
                choice.giving.amount
              );
            this.actualRoom = changeEvent(dataEvents.mainEvents[0]);
          }
        }

        if (!isExchangeOk) {
          document.querySelector<HTMLDivElement>(
            ".prompt__error"
          )!.innerHTML = `Erreur : l'échange n'est pas possible`;
        }
        break;
      case "nothing":
        this.mainEvent.outputContext = `Vous n'avez rien fait`;
        this.actualRoom = changeEvent(this.mainEvent);
        break;
      default:
        if (!hasCase) {
          console.error("L'évènement n'existe pas");
        }
        break;
    }
  }

  dipslayEquipment() {
    document.querySelector<HTMLDivElement>(
      ".player__life"
    )!.innerHTML = `${this.player.currentLife}/${this.player.maxLife} PV`;

    document.querySelector<HTMLDivElement>(
      ".player__coins"
    )!.innerHTML = `${this.player.coins} $`;
  }

  endGame(isWin: boolean = false): void {
    console.log("Fin du jeu");
    if (isWin) {
      document.querySelector<HTMLDivElement>(
        ".prompt__description"
      )!.innerHTML = "Le jeu est fini. Vous avez gagné !!! 🥳🥳🥳🥳🥳🥳";
    } else {
      document.querySelector<HTMLDivElement>(
        ".prompt__description"
      )!.innerHTML = "Le jeu est fini. Vous avez perdu !!!";
    }
  }

  randomIntFromInterval(min: number, max: number): number {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
