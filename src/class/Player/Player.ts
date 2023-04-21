/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-case-declarations */
import Inventory from "../Inventory/Inventory";
import Render from "../Render/Render";

class Player {
  name: string;
  currentLife: number = 0;
  maxLife: number = 0;
  role?: string;
  level: number;
  coins: number = 0;
  image?: string;
  sip: number = 3;
  thirst: number = 50;
  maxThirst: number = 50;
  sipRecovery: number = 25;
  render: Render;
  inventory: Inventory = new Inventory();

  constructor(name: string, render: Render) {
    this.name = name;
    this.level = 1;
    this.render = render;
  }

  takeHit(damage: number) {
    this.currentLife -= damage;

    if (this.currentLife < 0) {
      this.currentLife = 0;
    }

    this.render.displayMessage(
      ".player__life",
      `${this.currentLife}/${this.maxLife} ❤️`
    );
  }

  heal(amount: number) {
    this.currentLife += amount;

    if (this.currentLife > this.maxLife) {
      this.currentLife = this.maxLife;
    }

    this.render.displayMessage(
      ".player__life",
      `${this.currentLife}/${this.maxLife} ❤️`
    );
  }

  earnMoney(amount: number) {
    this.coins += amount;

    this.render.displayMessage(".player__coins", `${this.coins} 🫘`);
  }

  giveMoney(amount: number): boolean {
    let response = true;
    if (this.coins < amount) {
      response = false;
    } else {
      this.coins -= amount;
      response = true;
    }

    this.render.displayMessage(".player__coins", `${this.coins} 🫘`);

    return response;
  }

  exchangeAction(slug: string, amount: number): string | boolean {
    switch (slug) {
      case "hit":
        this.takeHit(amount);
        return "Vous prenez " + amount + " dégats";
      case "give-coin":
        const isExchangeable = this.giveMoney(amount);
        return isExchangeable ? "Vous donnez " + amount + " 🫘" : false;
      case "get-coin":
        this.earnMoney(amount);
        return "Vous gagnez " + amount + " 🫘";
      case "heal":
        this.heal(amount);
        return "Vous êtes soigné de " + amount + " ❤️";
      case "hp-plus":
        this.maxLife += amount;
        this.currentLife += amount;
        return "Votre vie augmente de " + amount + " ❤️ supplémentaires";
      case "get-sip":
        this.getSip();
        return "Vous gagnez " + amount + " dose d'🥛 pour votre gourde";
      default:
        return "Objet inconnu";
    }
  }

  loseThirst(quantity: number) {
    this.thirst -= quantity;

    if (this.thirst < 0) {
      this.thirst = 0;
    }

    this.render.displayMessage(
      ".player__thirst",
      `${this.thirst}/${this.maxThirst} 💧`
    );
  }

  drink() {
    this.sip--;
    this.thirst += this.sipRecovery;

    if (this.thirst > this.maxThirst) {
      this.thirst = this.maxThirst;
    }

    this.render.displayMessage(
      ".player__thirst",
      `${this.thirst}/${this.maxThirst} 💧`
    );

    this.render.displayMessage(".player__sip", `${this.sip} 🥛`);
  }

  getSip() {
    this.sip++;
    this.render.displayMessage(".player__sip", `${this.sip} 🥛`);
  }

  loadFromDatas(savedPlayer: {
    currentLife: number;
    maxLife: number;
    role: string | undefined;
    level: number;
    coins: number;
    image: string | undefined;
    sip: number;
    thirst: number;
  }) {
    this.currentLife = savedPlayer.currentLife;
    this.maxLife = savedPlayer.maxLife;
    this.role = savedPlayer.role;
    this.level = savedPlayer.level;
    this.coins = savedPlayer.coins;
    this.image = savedPlayer.image;
    this.sip = savedPlayer.sip;
    this.thirst = savedPlayer.thirst;
  }
}

export default Player;
