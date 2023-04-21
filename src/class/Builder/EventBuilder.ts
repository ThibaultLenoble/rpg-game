import ChoiceBuilder from "./ChoiceBuilder";
import ExchangeEvent from "../RoomEvent/ExchangeEvent";
import * as dataEvents from "../../datas/events.json";
import RoomEvent from "../RoomEvent/RoomEvent";

export default class EventBuilder {
  choiceBuilder: ChoiceBuilder;

  constructor() {
    this.choiceBuilder = new ChoiceBuilder();
  }

  build(eventData: any) {
    let event: any;

    eventData.type == "ExchangeEvent"
      ? (event = new ExchangeEvent(eventData.label, eventData.outputContext))
      : (event = new RoomEvent(
          eventData.label,
          eventData.type,
          eventData.outputContext
        ));

    if (eventData.choices?.length > 0) {
      eventData.choices.forEach((choice: number) => {
        event.choices.push(
          this.choiceBuilder.buildSpecificChoice(this.choiceBuilder.getChoice(choice, eventData.type), eventData.type)
        );
      });
    }
    return event;
  }

  getEvent(eventId: number, eventType: string) {
    let list: any[] = [];

    if (eventType === 'main') {
      list = dataEvents.mainEvents
    } else {
      list = dataEvents.available
    }

    return list.find(event => event.id == eventId)
  }
}