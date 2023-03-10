import { dataWeapon } from "./weapons";
import Weapon from "../class/Weapon/Weapon";

export const dataRole: { title: string; hpMax: number; weapon: Weapon }[] = [
  {
    title: "La Jambonneuse Justicière",
    hpMax: 60,
    weapon: dataWeapon[0],
  },
  {
    title: "le Voleur de Moutons",
    hpMax: 80,
    weapon: dataWeapon[1],
  },
  {
    title: "le Nain voleur de chaussettes",
    hpMax: 90,
    weapon: dataWeapon[2],
  },
  {
    title: "Saucifflard l'Implaccable",
    hpMax: 120,
    weapon: dataWeapon[3],
  },
];
