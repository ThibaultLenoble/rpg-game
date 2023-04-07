/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import RoomEvent from "../RoomEvent/RoomEvent";
import Player from "../Player/Player";
import { changeEvent } from "../../utils/EventHandler";
import { dataEvents } from "../../datas/events";
import MainEvent from "../RoomEvent/MainEvent";
import ExchangeChoice from "../Choice/ExchangeChoice";
import Choice from "../Choice/Choice";
import Render from "../Render/Render";

export default class GameInstance {
  actualRoom?: RoomEvent | undefined;
  player: Player;

  mainEvent: MainEvent = dataEvents.mainEvents[0];
  roomCount: number = 0;

  maxRoom: number = 15;

  healMinValue: number = 10;
  hpPlusMinValue: number = 5;
  coinMinValue: number = 50;
  chestMinDamageValue: number = 5;
  levelMultiplicator: number = 2;

  render = new Render();

  constructor(player: Player) {
    this.player = player;
    this.actualRoom = changeEvent(dataEvents.mainEvents[1], this.render);
    this.render.dipslayEquipment(player);
  }

  changeRoom(): void {
    this.roomCount++;
    if (this.roomCount > this.maxRoom) {
      this.render.endGame(true);
    } else {
      console.log("change de salle");
      this.actualRoom = changeEvent(undefined, this.render);

      this.render.displayMessage(
        ".prompt__room-advance",
        `${this.roomCount}/${this.maxRoom}`
      );
    }
  }

  handleChoice(choiceIndex: number): void {
    if (this.actualRoom) {
      if (this.actualRoom.isChoiceExist(choiceIndex)) {
        const choice = this.actualRoom.getChoice(choiceIndex);
        this.handleAction(choice);
      } else {
        this.render.displayMessage(
          ".prompt__error",
          "Erreur : l'option n'existe pas"
        );
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
        const heal =
          this.healMinValue *
          (this.player.level * this.levelMultiplicator) *
          this.randomIntFromInterval(1, 4);
        this.player.heal(heal);
        this.mainEvent.outputContext = `Vous avez été soigné de ${heal} ❤️.`;
        this.actualRoom = changeEvent(this.mainEvent, this.render);
        break;
      case "chest-hp-plus":
        hasCase = true;
        const hpPlus =
          this.hpPlusMinValue *
          (this.player.level * this.levelMultiplicator) *
          this.randomIntFromInterval(1, 4);
        this.player.maxLife += hpPlus;
        this.player.heal(hpPlus);
        this.mainEvent.outputContext = `Votre vie augmente de ${hpPlus} ❤️.`;
        this.actualRoom = changeEvent(this.mainEvent, this.render);
        break;
      case "tacos":
        hasCase = true;
        if (this.randomIntFromInterval(1, 2) == 1) {
          const tacosPlus = 100;
          this.player.maxLife += tacosPlus;
          this.player.heal(tacosPlus);
          this.mainEvent.outputContext = `Vous avez de la chance, votre vie augmente de ${tacosPlus} ❤️.`;
        } else {
          this.player.currentLife = 0;
        }

        if (this.player.currentLife <= 0) {
          this.render.endGame(false);
        } else {
          this.actualRoom = changeEvent(this.mainEvent, this.render);
        }
        break;
      case "chest-hit":
        hasCase = true;
        const damage =
          this.chestMinDamageValue *
          (this.player.level * this.levelMultiplicator) *
          this.randomIntFromInterval(1, 4);
        this.player.takeHit(damage);

        if (this.player.currentLife <= 0) {
          this.render.endGame(false);
        } else {
          this.mainEvent.outputContext = `Vous avez subi ${damage} dégats.`;
          this.actualRoom = changeEvent(this.mainEvent, this.render);
        }
        break;
      case "chest-earn-money":
        hasCase = true;
        const money =
          this.coinMinValue *
          (this.player.level * this.levelMultiplicator) *
          this.randomIntFromInterval(1, 4);
        this.player.earnMoney(money);
        this.mainEvent.outputContext = `Vous avez gagné ${money} 🫘.`;
        this.actualRoom = changeEvent(this.mainEvent, this.render);
        break;
      case "exchange":
        hasCase = true;
        let isExchangeOk = false;
        if (choice instanceof ExchangeChoice) {
          const exchangeAction = this.player.exchangeAction(
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
            this.actualRoom = changeEvent(
              dataEvents.mainEvents[0],
              this.render
            );
          }
        }

        if (!isExchangeOk) {
          this.render.displayMessage(
            ".prompt__error",
            `Erreur : l'échange n'est pas possible`
          );
        }
        break;
      case "nothing":
        this.mainEvent.outputContext = `Vous n'avez rien fait`;
        this.actualRoom = changeEvent(this.mainEvent, this.render);
        break;
      default:
        if (!hasCase) {
          console.error("L'évènement n'existe pas");
        }
        break;
    }
  }

  randomIntFromInterval(min: number, max: number): number {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
