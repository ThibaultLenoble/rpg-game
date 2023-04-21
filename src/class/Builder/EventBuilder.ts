import ChoiceBuilder from "./ChoiceBuilder";
import ExchangeEvent from "../RoomEvent/ExchangeEvent";
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
          this.choiceBuilder.buildSpecificChoice(choice, eventData.type)
        );
      });
    }
    return event;
  }
}