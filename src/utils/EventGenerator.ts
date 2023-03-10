import RoomEvent from "../class/RoomEvent/RoomEvent";
import {dataEvents} from "../datas/events";
import {dataChoices} from "../datas/choices";
import Choice from "../class/Choice/Choice";
import ExchangeEvent from "../class/RoomEvent/ExchangeEvent";

export const getRandomEvent = (): RoomEvent => {
  let rand = Math.floor(Math.random() * dataEvents.available.length)
  let event = dataEvents.available[rand]

  switch (event.type) {
    case "EnigmaEvent":
    case "FightEvent":
    case "ExchangeEvent":
      event.choices = getRandomChoicesAccordingToEvent(event)
      if (event instanceof ExchangeEvent) {
        event.choices.push(dataChoices.MainEvent[2])
      }
      break;
    default:
      console.error("L'évènement n'existe pas ou n'a pas de type");
      break;
  }

  return event;
}

export const getRandomChoicesAccordingToEvent = (event: RoomEvent): Choice[] => {
  let minChoices = 2;
  let maxChoices = 4;
  let choicesCount = randomIntFromInterval(minChoices, maxChoices)

  let choices = [];

  for (let i = 0; i < choicesCount; i++) {
    let choiceList: Choice[] = [];
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
    choices.push(choiceList[randomIntFromInterval(0, choiceList.length - 1)]);
  }

  return choices;
}

export const randomIntFromInterval = (min: number, max: number): number => { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}