import GameController from "./controller/GameController/GameController";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="prompt">
    <h1 class="prompt__title">Hello RPG game</h1>
    <span class="prompt__room-advance"></span>
    <p class="prompt__description">Bienvenue sur RPG game, veuillez entrer votre nom pour commencer une partie</p>
    <input type="text" class="prompt__input">
    <button class="prompt__submit">Continuer</button>
    <div class="player__equipement">
      <p class="life__player"></p>
    </div>
  </div>
`;

const inputBtn: any = document.querySelector(".prompt__submit");
const inputEl: any = document.querySelector(".prompt__input");

inputBtn.addEventListener("click", () => {getValue(); inputEl.value= ""});

const gameController = new GameController();

const getValue = () => {
  gameController.handleInput(inputEl.value);
};
