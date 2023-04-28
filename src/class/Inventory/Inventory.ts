/* eslint-disable @typescript-eslint/no-this-alias */
import Item from "../Item/Item";
import Render from "../Render/Render";

export default class Inventory {
  items: Item[] = [];
  render: Render = new Render();

  addItem(item: Item) {
    this.items.push(item);
    console.info("adding item ");
    this.drawItem();
  }

  drawItem() {
    const parent = document.getElementById("inv-container");
    while (parent && parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

    for (let i = 0; i < this.items.length; i++) {
      const item = document.createElement("div");
      item.className = "itemitem itemSlot " + this.items[i].id;
      item.setAttribute("data-item-id", this.items[i].id.toString());
      item.setAttribute(
        "data-item-use-count",
        this.items[i].useCount.toString()
      );
      item.setAttribute("inv-type", "p");
      item.setAttribute(
        "style",
        "background: url('" +
          this.items[i].image +
          "'); background-size: contain;"
      );

      document.getElementById("inv-container")?.appendChild(item);
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

      if (this.items[index].useCount < 1) {
        this.removeItem(itemToFind);
      }
      this.render.updateInventoryItem(this.items[index]);
      return itemToSend;
    } else {
      console.info("false");
      return false;
    }
  }

  getItemById(itemId: number) {
    return this.items.find(item => item.id === itemId);
  }
}
