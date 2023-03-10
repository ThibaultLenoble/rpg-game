import GameController from "./controller/GameController/GameController";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="prompt">
    <span class="prompt__error"></span>
    <h1 class="prompt__title">Donjons & Lardons 🏰 🥓</h1>
    <span class="prompt__room-advance"></span>
    <p class="prompt__description">Bienvenue sur Donjons & Lardons, veuillez entrer votre nom pour commencer une partie</p>
    <input type="text" class="prompt__input">
    <button class="prompt__submit">Continuer</button>
  </div>
  <div class="context">
    <img src="" />
  </div>
  <div class="player">
   <div class="player__pic">
    </div>
    <div class="player__info">
    <p class="player__name"></p>
    <p class="player__role"></p>
    <p class="player__life"></p>
    <p class="player__coins"></p>
    </div>
  </div>
  </div>
`;

const inputBtn: any = document.querySelector(".prompt__submit");
const inputEl: any = document.querySelector(".prompt__input");

inputBtn.addEventListener("click", () => {
  getValue();
  inputEl.value = "";
});
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getValue();
    inputEl.value = "";
  }
});

const gameController = new GameController();

const getValue = () => {
  gameController.handleInput(inputEl.value);
};
