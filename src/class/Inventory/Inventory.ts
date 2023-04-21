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

    for (let i = 1; i < this.items.length; i++) {
      const item = document.createElement("div");
      item.className = "itemSlot " + this.items[i].name;
      item.setAttribute("inv-type", "p");
      item.setAttribute(
        "style",
        "background: url(" +
          this.items[i].image +
          "); background-size: contain;"
      );

      document.getElementById("invContainer")?.appendChild(item);

      //creates item element

      //show element amounts
      // var itemAmount = document.createElement("div");
      // itemAmount.className = "itemAmount";
      // var itemAmountDisplay = document.createElement("p");
      // if (this.items[i].amount) {
      //   var itemDisplayStatsName = document.createTextNode(
      //     this.items[i].amount.toString()
      //   );
      // } else {
      //   var itemDisplayStatsName = document.createTextNode("");
      // }
      // item.appendChild(itemAmount);
      // itemAmount.appendChild(itemAmountDisplay);
      // itemAmountDisplay.appendChild(itemDisplayStatsName);

      //adds item element or elements
      // document.getElementById("invContainer")?.appendChild(item);

      //creates item display information

      // var itemDesc = document.createElement("div");
      // var itemDescTitle = document.createElement("h3");
      // var getItemTitle = document.createTextNode(this.items[i].name);

      // itemDesc.className = "itemDesc";
      // item.appendChild(itemDesc);
      // itemDesc.appendChild(itemDescTitle);
      // itemDescTitle.appendChild(getItemTitle);
      // }
    }
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
      this.items[index].useCount -= 1;

      if (this.items[index].useCount < 1) {
        this.removeItem(itemToFind);
      }

      return {
        action: this.items[index].action,
        amount: this.items[index].amount,
        load: this.items[index].useCount,
      };
    } else {
      console.info("false");
      return false;
    }
  }
}
