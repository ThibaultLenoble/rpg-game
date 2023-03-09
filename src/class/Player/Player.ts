import Weapon from "../Weapon/Weapon";

class Player {
  name: string;
  currentLife?: number;
  maxLife?: number;
  weapon?: Weapon;
  role?: string;
  level: number;
  coins: number;

  constructor(
    name: string,
  ) {
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
}

export default Player;
