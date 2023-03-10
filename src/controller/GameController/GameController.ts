import GameInstance from "../../class/GameInstance/GameInstance";
import Player from "../../class/Player/Player";
import { displayAllRoleChoices, setRole } from "../../utils/RoleManager";
import { dataRole } from "../../datas/role";

export default class GameController {
  gameInstance?: GameInstance;

  player?: Player;

  setGameInstance(player: Player): void {
    this.gameInstance = new GameInstance(player);
  }

  validateNumericInput(inputValue: string): boolean {
    if (this.isNumeric(inputValue)) {
      return true;
    } else {
      document.querySelector<HTMLDivElement>(
        ".prompt__error"
      )!.innerHTML = `Erreur : Veuillez entrer une option valide`;
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

            document.querySelector<HTMLDivElement>(".player__role")!.innerHTML =
              "Role : " + this.player.role;
            if (this.player.image)
              document.querySelector<HTMLDivElement>(
                ".player__pic"
              )!.innerHTML = "<img width='150' height='150' src='" + this.player.image + "' />";

            this.setGameInstance(this.player);
          } else {
            document.querySelector<HTMLDivElement>(
              ".prompt__error"
            )!.innerHTML = `Erreur : l'option n'existe pas`;
          }
        }
      } else {
        if (inputValue.length >= 3) {
          this.player = new Player(inputValue);
          document.querySelector<HTMLDivElement>(".prompt__error")!.innerHTML =
            "";
          document.querySelector<HTMLDivElement>(".player__name")!.innerHTML =
            "Joueur " + this.player.name;
          document.querySelector<HTMLDivElement>(
            ".prompt__description"
          )!.innerHTML =
            "Veuillez choisir une classe" + "\n \n" + displayAllRoleChoices();
        } else {
          document.querySelector<HTMLDivElement>(".prompt__error")!.innerHTML =
            "Le nom du personnage doit faire au minimum 3 caractères";
        }
      }
    }
  }

  isNumeric(str: string) {
    return !isNaN(parseFloat(str));
  }
}
