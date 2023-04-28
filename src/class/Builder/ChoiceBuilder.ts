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

  buildSpecificChoice(choice: any, eventType: string) {
    return this.build(choice, eventType);
  }

  createChoice(choiceData: { id: number; label: string; action: string }) {
    return new Choice(choiceData.id, choiceData.label, choiceData.action);
  }

  createExchangeChoice(choiceData: {
    id: number;
    label: string;
    action: string;
    needed: { type: string; amount: number };
    giving: { type: string; amount: number };
  }) {
    return new ExchangeChoice(
      choiceData.id,
      choiceData.label,
      choiceData.action,
      choiceData.needed,
      choiceData.giving
    );
  }

  getChoice(choiceId: number, eventType: string) {
    let list: any[] = [];

    if (eventType === "MainEvent") {
      list = dataChoices.MainEvent;
    }

    if (eventType === "EnigmaEvent") {
      list = dataChoices.EnigmaEvent;
    }

    if (eventType === "ExchangeEvent") {
      list = dataChoices.ExchangeEvent;
    }

    return list.find(choice => choice.id == choiceId);
  }
}
