import AppImages from "../assets/image";

export const dataRole: {
  title: string;
  hpMax: number;
  coins: number;
  image: string;
}[] = [
  {
    title: "La Jambonneuse Justicière",
    hpMax: 60,
    coins: 300,
    image: AppImages.jamboneuse,
  },
  {
    title: "le Voleur de Moutons",
    hpMax: 80,
    coins: 200,
    image: AppImages.voleuDeMouton,
  },
  {
    title: "le Nain voleur de chaussettes",
    hpMax: 90,
    coins: 150,
    image: AppImages.nainVoleurDeChaussette,
  },
  {
    title: "Saucifflard l'Implaccable teckel",
    hpMax: 120,
    coins: 0,
    image: AppImages.sauciflardLInplacable,
  },
];
