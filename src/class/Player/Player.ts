import Weapon from "../Weapon/Weapon";

class Player {
  name: string;
  currentLife: number;
  maxLife: number;
  weapon: Weapon;
  role: string;
  level: number;
  coins: number;

  constructor(
    name: string,
    currentLife: number,
    maxLife: number,
    weapon: Weapon,
    role: string,
    level: number,
    coins: number
  ) {
    this.name = name;
    this.currentLife = currentLife;
    this.maxLife = maxLife;
    this.weapon = weapon;
    this.role = role;
    this.level = level;
    this.coins = coins;
  }

  getName(): string {
    return this.name;
  }

  setLife(currentLife: number, maxLife: number) {
    this.currentLife = currentLife;
    this.maxLife = maxLife;
  }

  getLife(): { current: number; max: number } {
    return { current: this.currentLife, max: this.maxLife };
  }

  setWeapon(weapon: Weapon) {
    this.weapon = weapon;
  }

  getWeapon(): Weapon {
    return this.weapon;
  }

  setRole(role: string) {
    this.role = role;
  }

  getRole(): string {
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
}

export default Player;
