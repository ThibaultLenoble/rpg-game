import { dataWeapon } from "./weapons";
import Weapon from "../class/Weapon/Weapon";

export const dataRole: { title: string; hpMax: number; weapon: Weapon; image: string }[] = [
  {
    title: "La Jambonneuse Justicière",
    hpMax: 60,
    weapon: dataWeapon[0],
    image: "https://i.postimg.cc/TwW6NHD1/jamboneuse.png",
  },
  {
    title: "le Voleur de Moutons",
    hpMax: 80,
    weapon: dataWeapon[1],
    image: "https://i.postimg.cc/bv0DFSYn/voleur-de-mouton.png",
  },
  {
    title: "le Nain voleur de chaussettes",
    hpMax: 90,
    weapon: dataWeapon[2],
    image: "https://i.postimg.cc/ZK1SBfPb/nain-voleur-de-chaussette.jpg",
  },
  {
    title: "Saucifflard l'Implaccable teckel",
    hpMax: 120,
    weapon: dataWeapon[3],
    image: "https://i.postimg.cc/DwvK3PDv/sauciflard-l-inplacable-teckel.webp",
  },
];
