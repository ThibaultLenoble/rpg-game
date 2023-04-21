import Item from "../Item/Item";

export default class Inventory {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }
  removeItem(itemToFind: Item) {
    console.log("About to remove item :", this.items, itemToFind);
    const itemToRemove = this.items.find(item => item.name === itemToFind.name);

    if (itemToRemove !== undefined) {
      const removeIndex = this.items
        .map(item => item.name)
        .indexOf(itemToRemove.name);

      removeIndex && this.items.splice(removeIndex, 1);
    } else {
      console.error("Objet à retirer non trouvé dans l'inventaire");
    }

    console.log("End of function : ", this.items);
  }

  useItem(itemToFind: Item) {
    const itemToUse = this.items.find(item => item.name === itemToFind.name);

    if (itemToUse !== undefined) {
      const useIndex = this.items
        .map(item => item.name)
        .indexOf(itemToUse.name);

      return useIndex
        ? this.items[useIndex]
        : console.error("Objet à utiliser non trouvé dans l'inventaire");
    } else {
      console.error("Objet à utiliser non trouvé dans l'inventaire");
    }
  }
}
