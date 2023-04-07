/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-case-declarations */
import Render from "../Render/Render";

class Player {
  name: string;
  currentLife: number = 0;
  maxLife: number = 0;
  role?: string;
  level: number;
  coins: number = 0;
  image?: string;
  render: Render;

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
      default:
        return "Objet inconnu";
    }
  }
}

export default Player;
