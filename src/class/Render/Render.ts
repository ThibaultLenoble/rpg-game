/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-inferrable-types */

import Item from "../Item/Item";
import Player from "../Player/Player";

export default class Render {
  dipslayEquipment(player: Player) {
    this.displayMessage(
      ".player__life",
      `${player.currentLife}/${player.maxLife} ❤️`
    );
    this.displayMessage(".player__coins", `${player.coins} 🫘`);

    this.displayMessage(
      ".player__thirst",
      `${player.thirst}/${player.maxThirst} 💧`
    );

    this.displayMessage(".player__sip", `${player.sip} 🥛`);

    document.querySelector("#show_inventory")?.classList.remove("hide");
  }

  displayMessage(selector: string, message: string) {
    document.querySelector<HTMLDivElement>(selector)!.innerHTML = message;
  }

  removeMessage(selector: string) {
    document.querySelector<HTMLDivElement>(selector)!.remove();
  }

  displayImage(selector: string, imgSrc: string) {
    document.querySelector<HTMLImageElement>(selector)!.src = imgSrc;
  }

  endGame(isWin: boolean = false): void {
    console.log("Fin du jeu");
    if (isWin) {
      this.displayMessage(
        ".prompt__description",
        "Le jeu est fini. Vous avez gagné !!! 🥳🥳🥳🥳🥳🥳"
      );
    } else {
      this.displayMessage(
        ".prompt__description",
        "Le jeu est fini.Vous avez perdu!!!"
      );
    }
    this.removeMessage(".prompt__room-advance");
    this.removeMessage(".prompt__input");
    this.removeMessage(".prompt__submit");
  }

  updateInventoryItem(itemToUpdate: Item) {
    document
      .querySelector(".itemSlot[data-item-id='" + itemToUpdate.id + "']")
      ?.setAttribute("data-item-use-count", itemToUpdate.useCount.toString());
  }
}
