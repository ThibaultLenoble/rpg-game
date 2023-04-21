import ExchangeChoice from "../Choice/ExchangeChoice";
import Choice from "../Choice/Choice";
import dataChoices from "../../datas/choices.json";

export default class ChoiceBuilder {
  build(choiceData: any, type: string): any {
    switch (type) {
      case "MainEvent":
      case "EnigmaEvent":
        return this.createChoice(choiceData);
      case "ExchangeEvent":
        return this.createExchangeChoice(choiceData);
    }
  }

  buildSpecificChoice(choiceId: number, eventType: string) {
    let choice;
    switch (eventType) {
      case "MainEvent":
        choice = dataChoices.MainEvent[choiceId];
        break;
      case "EnigmaEvent":
        choice = dataChoices.EnigmaEvent[choiceId];
        break;
      case "ExchangeEvent":
        choice = dataChoices.ExchangeEvent[choiceId];
        break;
    }
    return this.build(choice, eventType);
  }

  createChoice(choiceData: { label: string; action: string }) {
    return new Choice(choiceData.label, choiceData.action);
  }

  createExchangeChoice(choiceData: {
    label: string;
    action: string;
    needed: { type: string; amount: number };
    giving: { type: string; amount: number };
  }) {
    return new ExchangeChoice(
      choiceData.label,
      choiceData.action,
      choiceData.needed,
      choiceData.giving
    );
  }
}
