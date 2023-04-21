/* eslint-disable @typescript-eslint/no-non-null-assertion */
import GameInstance from "../../class/GameInstance/GameInstance";
import Player from "../../class/Player/Player";
import { displayAllRoleChoices, setRole } from "../../utils/RoleManager";
import { dataRole } from "../../datas/role";
import Render from "../../class/Render/Render";
import SaveManager from "../../utils/SaveManager";
import RoomEvent from "../../class/RoomEvent/RoomEvent";
import Choice from "../../class/Choice/Choice";
import MainEvent from "../../class/RoomEvent/MainEvent";

export default class GameController {
  gameInstance?: GameInstance;

  player?: Player;

  render: Render = new Render();
  saveManager: SaveManager = new SaveManager();

  validateNumericInput(inputValue: string): boolean {
    if (this.isNumeric(inputValue)) {
      return true;
    } else {
      this.render.displayMessage(
        ".prompt__error",
        "Erreur : Veuillez entrer une option valide"
      );
      return false;
    }
  }

  handleInput(inputValue: string) {
    if (this.gameInstance) {
      if (this.validateNumericInput(inputValue)) {
        this.gameInstance.handleChoice(parseFloat(inputValue) - 1);
      }
    } else {
      if (this.player) {
        if (this.validateNumericInput(inputValue)) {
          if (
            parseFloat(inputValue) - 1 > -1 &&
            parseFloat(inputValue) - 1 < dataRole.length
          ) {
            this.player = setRole(this.player, parseFloat(inputValue) - 1);

            this.render.displayMessage(
              ".player__role",
              "Role : " + this.player.role
            );
            if (this.player.image)
              this.render.displayMessage(
                ".player__pic",
                "<img width='150' height='150' src='" +
                this.player.image +
                "' />"
              );

            this.gameInstance = new GameInstance(this.player, this.render);
            this.gameInstance.newGame()
          } else {
            this.render.displayMessage(
              ".prompt__error",
              "Erreur : l'option n'existe pas"
            );
          }
        }
      } else {
        if (inputValue.length >= 3) {
          this.player = new Player(inputValue, this.render);
          this.render.displayMessage(".prompt__error", "");
          this.render.displayMessage(
            ".player__name",
            "Joueur " + this.player.name
          );

          this.render.displayMessage(
            ".prompt__description",
            "Veuillez choisir une classe" + "\n \n" + displayAllRoleChoices()
          );
        } else {
          this.render.displayMessage(
            ".prompt__error",
            "Le nom du personnage doit faire au minimum 3 caractères"
          );
        }
      }
    }
  }

  newGameFromSave(savedDatas: any) {

    let savedPlayer = new Player(savedDatas.player.name, this.render);
    savedPlayer.loadFromDatas(savedDatas.player)
    this.player = savedPlayer

    if (this.player) {
      this.render.displayMessage(
        ".player__name",
        "Joueur " + this.player.name
      );

      this.render.displayMessage(
        ".player__role",
        "Role : " + this.player.role
      );

      this.render.displayMessage(
        ".player__pic",
        "<img width='150' height='150' src='" +
        this.player.image +
        "' />"
      );

      this.gameInstance = new GameInstance(this.player, this.render);
      this.gameInstance.roomCount = savedDatas.roomCount

      let rooms: RoomEvent[] = []

      savedDatas.rooms.forEach((savedRoom: { choices: { label: string; action: string; }[]; inputContext: string; outputContext: string | undefined; image: string | undefined; }) => {
        let choices: Choice[] = []
        savedRoom.choices.forEach((choice: { label: string; action: string; }) => {
          choices.push(new Choice(choice.label, choice.action))
        })
        let room = new MainEvent(savedRoom.inputContext, savedRoom.outputContext, choices, savedRoom.image)

        rooms.push(room)
      })

      this.gameInstance.rooms = rooms
      this.gameInstance.actualRoom = savedDatas.actualRoom

      this.gameInstance.newGameFromFile()
    }
  }

  isNumeric(str: string) {
    return !isNaN(parseFloat(str));
  }
}
