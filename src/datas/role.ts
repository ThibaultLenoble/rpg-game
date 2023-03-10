import { dataWeapon } from "./weapons";
import Weapon from "../class/Weapon/Weapon";

export const dataRole: { title: string; hpMax: number; weapon: Weapon }[] = [
  {
    title: "La Jambonneuse Justicière",
    hpMax: 50,
    weapon: dataWeapon[1],
  },
  {
    title: "le Voleur de Moutons",
    hpMax: 80,
    weapon: dataWeapon[2],
  },
  {
    title: "le Nain voleur de chaussettes",
    hpMax: 80,
    weapon: dataWeapon[3],
  },
  {
    title: "Pâté croûte-man",
    hpMax: 80,
    weapon: dataWeapon[4],
  },
];
