
import RoomEvent from "../class/RoomEvent/RoomEvent";
import {dataEvents} from "../datas/events";
import Choice from "../class/Choice/Choice";
import ExchangeEvent from "../class/RoomEvent/ExchangeEvent";
import * as dataChoices from '../datas/choices.json';
import Builder from "../class/Builder/builder";


export const getRandomEvent = (): RoomEvent => {
  let rand = Math.floor(Math.random() * dataEvents.available.length)
  let event = dataEvents.available[rand]
  let builder = new Builder();
  

  switch (event.type) {
    case "EnigmaEvent":
    case "FightEvent":
    case "ExchangeEvent":
      if (event.choices.length === 0) {
        event.choices = getRandomChoicesAccordingToEvent(event)
        if (event instanceof ExchangeEvent) {
          event.choices.push(builder.createChoice(dataChoices.MainEvent[2], 'ExchangeEvent'))
        }
      }
      break;
    default:
      console.error("L'évènement n'existe pas ou n'a pas de type");
      break;
  }

  return event;
}

export const getRandomChoicesAccordingToEvent = (event: RoomEvent): Choice[] => {

  const builder = new Builder();
  let minChoices = 2;
  let maxChoices = 3;
  let choicesCount = randomIntFromInterval(minChoices, maxChoices)

  

  let choices = [];

  let choiceList: any = [];


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
    let choiceIndex: number = randomIntFromInterval(0, choiceList.length - 1)
    if (event.type == 'ExchangeEvent') {
      choices.push(builder.createExchangeChoice(choiceList[choiceIndex]));
    } else {
      choices.push(builder.createChoice(choiceList[choiceIndex], event.type));
    }
    
    choiceList.splice(choiceIndex, 1);
    
  }

  return choices;
}

export const randomIntFromInterval = (min: number, max: number): number => { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}