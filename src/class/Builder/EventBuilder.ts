import ChoiceBuilder from "./ChoiceBuilder";
import EnigmaEvent from "../RoomEvent/EnigmaEvent";
import MainEvent from "../RoomEvent/MainEvent";
import ExchangeEvent from "../RoomEvent/ExchangeEvent";

export default class EventBuilder {
  choiceBuilder: ChoiceBuilder

  constructor() {
    this.choiceBuilder = new ChoiceBuilder()
  }

  build(eventData: any) {
    let event: any

    switch (eventData.type) {
      case "MainEvent":
        event = this.createMainEvent(eventData)
        break;
      case "EnigmaEvent":
        event = this.createEnigmaEvent(eventData)
        break;
      case "ExchangeEvent":
        event = this.createExchangeEvent(eventData)
        break;
    }

    if (eventData.choices?.length > 0 ) {
      eventData.choices.forEach((choice: number) => {
        event.choices.push(this.choiceBuilder.buildSpecificChoice(choice, eventData.type))
      })
    }

    return event
  }

  createMainEvent(eventData : { label: string; type: string, outputContext?: string, choices?: [] }) {
    return new MainEvent(eventData.label, eventData.outputContext);
  }

  createEnigmaEvent(eventData : { label: string; type: string, outputContext?: string, choices?: [] }) {
    return new EnigmaEvent(eventData.label, eventData.outputContext);
  }

  createExchangeEvent(eventData : { label: string; type: string, outputContext?: string, choices: [] }) {
    return new ExchangeEvent(eventData.label, eventData.outputContext);
  }
}