export default class Weapon {
  name: string;
  damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }

  setName(name: string) {
    this.name = name;
  }

  getName():string {
    return this.name;
  }

  setDamage(damage: number) {
    this.damage = damage;
  }

  getDamage(): number {
    return this.damage;
  }
}