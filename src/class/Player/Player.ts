import Weapon from "../Weapon/Weapon";

class Player {
  name: string;
  currentLife: number = 0;
  maxLife: number = 0;
  weapon?: Weapon;
  role?: string;
  level: number;
  coins: number;

  constructor(name: string) {
    this.name = name;
    this.level = 1;
    this.coins = 100;
  }

  getName(): string {
    return this.name;
  }

  setLife(currentLife: number, maxLife: number) {
    this.currentLife = currentLife;
    this.maxLife = maxLife;
  }

  getLife(): { current?: number; max?: number } {
    return { current: this.currentLife, max: this.maxLife };
  }

  setWeapon(weapon: Weapon) {
    this.weapon = weapon;
  }

  getWeapon(): Weapon | undefined {
    return this.weapon;
  }

  setRole(role: string) {
    this.role = role;
  }

  getRole(): string | undefined {
    return this.role;
  }

  setLevel(level: number) {
    this.level = level;
  }

  getLevel(): number {
    return this.level;
  }

  setCoins(coins: number) {
    this.coins = coins;
  }

  getCoins(): number {
    return this.coins;
  }

  takeHit(damage: number) {
    this.currentLife -= damage;

    if (this.currentLife < 0) {
      this.currentLife = 0;
    }

    document.querySelector<HTMLDivElement>(
      ".player__life"
    )!.innerHTML = `${this.currentLife}/${this.maxLife} ❤️`;
  }

  heal(amount: number) {
    this.currentLife += amount;

    if (this.currentLife > this.maxLife) {
      this.currentLife = this.maxLife;
    }

    document.querySelector<HTMLDivElement>(
      ".player__life"
    )!.innerHTML = `${this.currentLife}/${this.maxLife} ❤️`;
  }

  earnMoney(amount: number) {
    this.coins += amount;

    document.querySelector<HTMLDivElement>(
      ".player__coins"
    )!.innerHTML = `${this.coins} 🫘`;
  }

  giveMoney(amount: number): boolean {
    let response = true;
    if (this.coins < amount) {
      response = false;
    } else {
      this.coins -= amount;
      response = true;
    }

    document.querySelector<HTMLDivElement>(
      ".player__coins"
    )!.innerHTML = `${this.coins} 🫘`;

    return response;
  }

  exchangeAction(slug: string, amount: number): string | boolean {
    switch (slug) {
      case "hit":
        this.takeHit(amount);
        return "Vous prenez " + amount + " dégats";
      case "give-coin":
        let isExchangeable = this.giveMoney(amount);
        return isExchangeable ? "Vous donnez " + amount + " 🫘" : false;
      case "get-coin":
        this.earnMoney(amount);
        return "Vous gagnez " + amount + " 🫘";
      case "heal":
        this.heal(amount);
        return "Vous êtes soigné de " + amount + " ❤️";
      case "hp-plus":
        this.maxLife += amount;
        this.currentLife += amount
        return "Votre vie augmente de " + amount + " ❤️ supplémentaires";
      default:
        return "Objet inconnu";
    }
  }
}

export default Player;
