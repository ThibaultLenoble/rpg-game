/* eslint-disable @typescript-eslint/no-this-alias */
import Item from "../Item/Item";
import Render from "../Render/Render";

export default class Inventory {
  items: Item[] = [];
  render: Render = new Render();

  addItem(item: Item) {
    this.items.push(item);
    console.info("adding item ");
    this.render.drawItem(this);
  }

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.render.drawItem(this);
      return true;
    } else {
      console.error("Objet à retirer non trouvé dans l'inventaire");
      return false;
    }
  }

  useItem(itemIdToFind: number) {
    const item = this.getItemById(itemIdToFind);
    if (item) {
      item.useCount -= 1;

      const itemToSend = {
        action: item.action,
        amount: item.amount,
        useCount: item.useCount,
        name: item.name,
      };

      if (item.useCount < 1) {
        this.removeItem(item);
      }
      this.render.updateInventoryItem(item);
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
