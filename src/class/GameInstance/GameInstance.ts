/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import RoomEvent from "../RoomEvent/RoomEvent";
import Player from "../Player/Player";
import { changeEvent } from "../../utils/EventHandler";
import ExchangeChoice from "../Choice/ExchangeChoice";
import Choice from "../Choice/Choice";
import Render from "../Render/Render";
import EventGenerator from "../../utils/EventGenerator";
import EventBuilder from "../Builder/EventBuilder";
import SaveManager from "../../utils/SaveManager";

export default class GameInstance {
  actualRoom?: RoomEvent | undefined;
  player: Player;
  rooms: RoomEvent[] = [];
  eventGenerator: EventGenerator = new EventGenerator();
  eventBuilder: EventBuilder = new EventBuilder();
  saveManager: SaveManager = new SaveManager();

  roomCount: number = 0;

  maxRoom: number = 15;

  healMinValue: number = 10;
  hpPlusMinValue: number = 5;
  coinMinValue: number = 50;
  chestMinDamageValue: number = 5;
  levelMultiplicator: number = 2;
  render: Render;
  thirstLose: number = 10;

  constructor(player: Player, render: Render) {
    this.player = player;
    this.render = render;
    this.render.dipslayEquipment(this.player);
  }

  newGame() {
    this.buildMap();
    this.actualRoom = changeEvent(
      this.eventBuilder.build(this.eventBuilder.getEvent(2, "MainEvent")),
      this.render
    );
  }

  newGameFromFile() {
    if (this.actualRoom) {
      this.actualRoom = changeEvent(this.actualRoom, this.render);
    }
  }

  buildMap() {
    for (let i = 0; i <= this.maxRoom; i++) {
      this.rooms.push(this.eventGenerator.getRandomEvent());
    }
  }

  changeRoom(): void {
    this.roomCount++;
    if (this.roomCount > this.maxRoom) {
      this.render.endGame(!!this.player.inventory.getItemById(1) ?? false);
    } else {
      this.actualRoom = changeEvent(this.rooms[this.roomCount], this.render);

      if (this.roomCount > 1) {
        this.player.loseThirst(this.thirstLose);
      }

      if (this.player.thirst == 0) {
        this.player.takeHit(this.player.maxLife * 0.3);

        if (this.player.currentLife <= 0) {
          this.render.endGame(false);
        }
      }

      this.render.displayMessage(
        ".prompt__room-advance",
        `${this.roomCount}/${this.maxRoom}`
      );
    }
  }

  handleChoice(choiceIndex: number): void {
    if (this.actualRoom) {
      if (this.actualRoom.choices[choiceIndex] !== undefined) {
        const choice = this.actualRoom.choices[choiceIndex];
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
    let event;
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
        event = this.eventBuilder.build(
          this.eventBuilder.getEvent(1, "MainEvent")
        )
        event.outputContext = `Vous avez été soigné de ${heal} ❤️.`;
        this.actualRoom = event
        break;
      case "chest-hp-plus":
        hasCase = true;
        const hpPlus =
          this.hpPlusMinValue *
          (this.player.level * this.levelMultiplicator) *
          this.randomIntFromInterval(1, 4);
        this.player.maxLife += hpPlus;
        this.player.heal(hpPlus);
        event = this.eventBuilder.build(
          this.eventBuilder.getEvent(1, "MainEvent")
        );
        event.outputContext = `Votre vie augmente de ${hpPlus} ❤️.`;
        this.actualRoom = changeEvent(event, this.render);
        break;
      case "tacos":
        hasCase = true;
        if (this.randomIntFromInterval(1, 2) == 1) {
          const tacosPlus = 100;
          this.player.maxLife += tacosPlus;
          this.player.heal(tacosPlus);
          event = this.eventBuilder.build(
            this.eventBuilder.getEvent(1, "MainEvent")
          )
          event.outputContext = `Vous avez de la chance, votre vie augmente de ${tacosPlus} ❤️.`;
        } else {
          this.player.currentLife = 0;
        }

        if (this.player.currentLife <= 0) {
          this.render.endGame(false);
        } else {
          this.actualRoom = changeEvent(
            event,
            this.render
          );
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
          const event = this.eventBuilder.build(
            this.eventBuilder.getEvent(1, "MainEvent")
          );
          event.outputContext = `Vous avez subi ${damage} dégats.`;
          this.actualRoom = changeEvent(event, this.render);
        }
        break;
      case "chest-earn-money":
        hasCase = true;
        const money =
          this.coinMinValue *
          (this.player.level * this.levelMultiplicator) *
          this.randomIntFromInterval(1, 4);
        this.player.earnMoney(money);
        event = this.eventBuilder.build(
          this.eventBuilder.getEvent(1, "MainEvent")
        );
        event.outputContext = `Vous avez gagné ${money} 🫘.`;
        this.actualRoom = changeEvent(event, this.render);
        break;
      case "chest-get-sip":
        hasCase = true;
        this.player.getSip();
        event = this.eventBuilder.build(
          this.eventBuilder.getEvent(1, "MainEvent")
        );
        event.outputContext = `Vous avez gagné 1 dose d'🥛.`;
        this.actualRoom = changeEvent(event, this.render);
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
            event = this.eventBuilder.build(
              this.eventBuilder.getEvent(1, "MainEvent")
            );
            event.outputContext =
              exchangeAction +
              ", " +
              this.player.exchangeAction(
                choice.giving.type,
                choice.giving.amount
              );
            if (this.player.currentLife <= 0) {
              this.render.endGame(false);
            } else {
              this.actualRoom = changeEvent(event, this.render);
            }
          }
        }

        if (!isExchangeOk) {
          this.render.displayMessage(
            ".prompt__error",
            `Erreur : l'échange n'est pas possible`
          );
        }
        break;
      case "drink":
        hasCase = true;

        this.player.drink();

        const item = this.player.inventory.getItemById(0);

        if (item) {
          this.player.inventory.useItem(item.id);
        }
        break;
      case "nothing":
        event = this.eventBuilder.build(
          this.eventBuilder.getEvent(1, "MainEvent")
        );
        event.outputContext = `Vous n'avez rien fait`;
        this.actualRoom = changeEvent(event, this.render);
        break;
      case "save":
        this.saveManager.save(this);
        event = this.eventBuilder.build(
          this.eventBuilder.getEvent(1, "MainEvent")
        );
        event.outputContext = `Vous avez sauvegardé`;
        this.actualRoom = changeEvent(event, this.render);
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
