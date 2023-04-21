/* eslint-disable @typescript-eslint/no-this-alias */
import GameController from "../../controller/GameController/GameController";
import Item from "../Item/Item";

export default class Inventory {
  items: Item[] = [];

  addItem(item: Item) {
    this.items.push(item);
    console.info("adding item ");
    this.drawItem();
  }

  drawItem() {
    const parent = document.getElementById("invContainer");
    while (parent && parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

    for (let i = 0; i < this.items.length; i++) {
      const item = document.createElement("div");
      item.className = "itemitem itemSlot " + this.items[i].id;
      item.setAttribute("inv-type", "p");
      item.setAttribute(
        "style",
        "background: url(" +
          this.items[i].image +
          "); background-size: contain;"
      );

      document.getElementById("invContainer")?.appendChild(item);
    }

    const globalThis = this;
    document.querySelectorAll(".itemitem").forEach((item, index) => {
      item.addEventListener("click", function () {
        globalThis.useItem(globalThis.items[index]);
      });
    });
  }

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.drawItem();
      return true;
    } else {
      console.error("Objet à retirer non trouvé dans l'inventaire");
      return false;
    }
  }

  useItem(itemToFind: Item) {
    const index = this.items.indexOf(itemToFind);
    if (index !== -1) {
      this.items[index].useCount -= 1;
      const itemToSend = {
        action: this.items[index].action,
        amount: this.items[index].amount,
        useCount: this.items[index].useCount,
      };
      this.removeItem(itemToFind);
      return itemToSend;
    } else {
      console.info("false");
      return false;
    }
  }
}
