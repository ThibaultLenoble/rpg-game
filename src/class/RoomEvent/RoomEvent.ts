import AppImages from "../../assets/image";
import Choice from "../Choice/Choice";

export default class RoomEvent {
  type: string;
  inputContext: string;
  outputContext?: string;
  choices: Choice[] = [];
  image?: string;

  constructor(
    inputContext: string,
    type: string,
    outputContext?: string,
    choices?: Choice[],
    image?: string
  ) {
    this.inputContext = inputContext;
    this.type = type;
    this.image = undefined;
    

    if (outputContext) {
      this.outputContext = outputContext;
    }

    if (choices) {
      this.choices = choices;
    }

    switch (type) {
      case "MainEvent":
        image! = AppImages.archeologue;
        break;
      case "ExchangeEvent":
        image! = AppImages.marchant;
        break;
      case "EnigmaEvent":
        image! = AppImages.goldenChest;
        break;
    }
  }

  displayAllChoices(): string {
    let labels = "";
    this.choices.forEach((choice, index) => {
      if (choice !== undefined) {
        labels += `${index + 1} - ${choice.label} \n`;
      }
    });
    return labels;
  }
}