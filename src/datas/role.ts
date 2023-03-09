import {dataWeapon} from "./weapons";
import Weapon from "../class/Weapon/Weapon";

export const dataRole: { title: string, hpMax: number, weapon: Weapon }[] = [
  {
    title : 'classe 1',
    hpMax : 50,
    weapon : dataWeapon[1]
  },
  {
    title : 'classe 2',
    hpMax : 80,
    weapon : dataWeapon[2]
  }
]