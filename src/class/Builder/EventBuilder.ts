import ChoiceBuilder from "./ChoiceBuilder";
import ExchangeEvent from "../RoomEvent/ExchangeEvent";
import * as dataEvents from "../../datas/events.json";
import RoomEvent from "../RoomEvent/RoomEvent";
import Choice from "../Choice/Choice";

export default class EventBuilder {
  choiceBuilder: ChoiceBuilder;

  constructor() {
    this.choiceBuilder = new ChoiceBuilder();
  }

  build(eventData: any, choices?: Choice[]) {
    let event: any;

    eventData.type == "ExchangeEvent"
      ? (event = new ExchangeEvent(eventData.id, eventData.label, eventData.outputContext))
      : (event = new RoomEvent(
          eventData.id,
          eventData.label,
          eventData.type,
          eventData.outputContext
        ));

    if (choices) {
      event.choices = choices;
    } else {
      if (eventData.choices?.length > 0) {
        eventData.choices.forEach((choice: number) => {
          event.choices.push(
            this.choiceBuilder.buildSpecificChoice(this.choiceBuilder.getChoice(choice, 'MainEvent'), eventData.type)
          );
        });
      }
    }
    return event;
  }

  getEvent(eventId: number, eventType: string) {
    let list: any[] = [];

    if (eventType === 'MainEvent') {
      list = dataEvents.mainEvents
    } else {
      list = dataEvents.available
    }

    return list.find(event => event.id == eventId)
  }
}