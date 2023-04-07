import Choice from "../Choice/Choice";
import ExchangeChoice from "../Choice/ExchangeChoice";
import SimpleChoice from "../Choice/SimpleChoice";

class Builder {
    createChoice(choiceData : { label: string; action: string }, type: string = 'EnigmaEvent'): Choice|SimpleChoice{
        switch (type) {
            case "MainEvent":
              return new Choice(choiceData.label, choiceData.action);
              break;
            case "EnigmaEvent":
              return new SimpleChoice(choiceData.label, choiceData.action);
              break;
            case "ExchangeEvent":
        
              break;
          };

          return new SimpleChoice(choiceData.label, choiceData.action);
    }

    createExchangeChoice(choiceData : { label: string; action: string, needed: {type: string, amount: number}, giving: {type: string, amount: number} }) {
        return new ExchangeChoice(choiceData.label, choiceData.action, choiceData.needed, choiceData.giving);
    }
}

export default Builder;