import Choice from "../class/Choice/Choice";
import ChoiceInterface from "../class/Choice/ChoiceInterface";

export const dataChoices: ChoiceInterface[] = [
  new Choice(
    "Partir en direction de la salle suivante",
    "get-out"
  ),
  new Choice(
    "Rester dans cette salle",
    "Vous avez choisi de rester dans cette salle"
  )
];
