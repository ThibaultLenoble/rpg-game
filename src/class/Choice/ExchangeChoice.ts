import Choice from "./Choice";

export default class ExchangeChoice extends Choice {
  needed: { type: string; amount: number };
  giving: { type: string; amount: number };

  constructor(
    label: string,
    action: string,
    needed: { type: string; amount: number },
    giving: { type: string; amount: number }
  ) {
    super(label, action);
    this.needed = needed;
    this.giving = giving;
    this.label +=
      " " +
      needed.amount +
      " " +
      this.exchangeItemLabel(needed.type) +
      " contre " +
      giving.amount +
      " " +
      this.exchangeItemLabel(giving.type);
  }

  exchangeItemLabel(slug: string) {
    switch (slug) {
      case "hit":
        return "dégats";
      case "give-coin":
      case "get-coin":
        return "🫘";
      case "heal":
        return "❤️";
      case "hp-plus":
        return "❤️ supplémentaires";
      default:
        return "Objet inconnu";
    }
  }
}
