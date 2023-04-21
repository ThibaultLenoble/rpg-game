import RoomEvent from "../class/RoomEvent/RoomEvent";
import * as dataEvents from "../datas/events.json";
import * as dataChoices from "../datas/choices.json";
import Choice from "../class/Choice/Choice";
import ExchangeEvent from "../class/RoomEvent/ExchangeEvent";
import ChoiceBuilder from "../class/Builder/ChoiceBuilder";
import EventBuilder from "../class/Builder/EventBuilder";

export default class EventGenerator {
  choiceBuilder: ChoiceBuilder;
  eventBuilder: EventBuilder;

  constructor() {
    this.choiceBuilder = new ChoiceBuilder();
    this.eventBuilder = new EventBuilder();
  }

  getRandomEvent = (): RoomEvent => {
    const rand = Math.floor(Math.random() * dataEvents.available.length);
    const event = dataEvents.available[rand];
    let buildEvent;

    switch (event.type) {
      case "EnigmaEvent":
      case "ExchangeEvent":
      default:
        buildEvent = this.eventBuilder.build(event);

        if (!event.choices || event.choices.length === 0) {
          buildEvent.choices =
            this.getRandomChoicesAccordingToEvent(buildEvent);
          if (buildEvent instanceof ExchangeEvent) {
            buildEvent.choices.push(
              this.choiceBuilder.build(
                this.choiceBuilder.getChoice(3, "MainEvent"),
                "MainEvent"
              )
            );
          }
        }
        break;
    }

    return buildEvent;
  };

  getRandomChoicesAccordingToEvent = (event: RoomEvent): Choice[] => {
    const minChoices = 2;
    const maxChoices = 3;
    const choicesCount = this.randomIntFromInterval(minChoices, maxChoices);

    const choices: any[] = [];

    let choiceList: any[] = [];
    switch (event.type) {
      case "EnigmaEvent":
        choiceList = dataChoices.EnigmaEvent;
        break;
      case "ExchangeEvent":
        choiceList = dataChoices.ExchangeEvent;
        break;
      default:
        console.error("L'évènement n'existe pas ou n'a pas de type");
        break;
    }

    for (let i = 0; i < choicesCount; i++) {
      const choiceIndex: number = this.randomIntFromInterval(
        0,
        choiceList.length - 1
      );
      choices.push(
        this.choiceBuilder.build(choiceList[choiceIndex], event.type)
      );
    }

    return choices;
  };

  randomIntFromInterval = (min: number, max: number): number => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}
