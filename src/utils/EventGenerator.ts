import RoomEvent from "../class/RoomEvent/RoomEvent";
import {dataEvents} from "../datas/events";
import ChoiceInterface from "../class/Choice/ChoiceInterface";
import {dataChoices} from "../datas/choices";

export const getRandomEvent = (): RoomEvent => {
  let event = dataEvents.available[Math.floor(Math.random() * dataEvents.available.length)]

  switch (event.constructor.name) {
    case "EnigmaEvent":
    case "FightEvent":
    case "ExchangeEvent":
      event.choices = getRandomChoicesAccordingToEvent(event)
      break;
    default:
      console.error("L'évènement n'existe pas ou n'a pas de type");
      break;
  }

  return event;
}

export const getRandomChoicesAccordingToEvent = (event: RoomEvent): ChoiceInterface[] => {
  let minChoices = 2;
  let maxChoices = 4;
  let choicesCount = randomIntFromInterval(minChoices, maxChoices)

  let choices = [];

  for (let i = 0; i < choicesCount; i++) {
    let choiceList: ChoiceInterface[] = [];
    switch (event.constructor.name) {
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
    choices.push(choiceList[randomIntFromInterval(0, choiceList.length - 1)]);
  }

  return choices;
}

export const randomIntFromInterval = (min: number, max: number): number => { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}