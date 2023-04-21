import Item from "../Item/Item";

export default class Inventory {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }
  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);

      return true;
    } else {
      console.error("Objet à retirer non trouvé dans l'inventaire");
      return false;
    }
  }

  useItem(itemToFind: Item) {
    const index = this.items.indexOf(itemToFind);
    if (index !== -1) {
      this.items[index].load -= 1;

      if (this.items[index].load < 1) {
        this.removeItem(itemToFind);
      }

      return {
        action: this.items[index].action,
        amount: this.items[index].amount,
        load: this.items[index].load,
      };
    } else {
      console.info("false");
      return false;
    }
  }
}
