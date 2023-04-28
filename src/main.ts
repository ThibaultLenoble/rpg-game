import AppImages from "./assets/image";
import GameController from "./controller/GameController/GameController";
// import "./class/Inventory/Inventory.js";
import "./style.css";
import Render from "./class/Render/Render";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="prompt">
    <span class="prompt__error"></span>
    <h1 class="prompt__title">Donjons & Lardons 🏰 🥓</h1>
    <span class="prompt__room-advance"></span>
    <p class="prompt__description">Bienvenue sur Donjons & Lardons, veuillez entrer votre nom pour commencer une partie</p>
    <input type="text" class="prompt__input">
    <button class="prompt__submit">Continuer</button>
    <div class="load-save__container">
        <input id="file-selector" type="file">
        <button class="load-save__btn">Charger</button>
    </div>
  </div>
  <div class="context">
    <img src="${AppImages.archeologue}" />
  </div>
  <div class="p-inv-wrapper hide">
    <h2>Inventory</h2>
    <div id="inv-container"></div>
  </div>
  <div class="player">
    <div class="player__info">
      <p class="player__name"></p>
      <p class="player__role"></p>
      <p class="player__life"></p>
      <p class="player__coins"></p>
      <p class="player__thirst"></p>
      <p class="player__sip"></p>
      <button id='show_inventory' class="hide"><img src="${AppImages.iconInventory}" class="icon" /></button>
      <div class="player__pic"></div>
    </div>
  </div>
  <a id="downloadLink" style="display:none"></a>
`;

// <p class="player__sip"></p>

// Show Inventory
const invent: HTMLDivElement | null = document.querySelector(".p-inv-wrapper");
const buttonShow = document.querySelector("#show_inventory");
buttonShow?.addEventListener("click", () => {
  if (invent)
    invent.classList.contains("hide")
      ? invent.classList.remove("hide")
      : invent.classList.add("hide");
});
// End Show Inventory

const inputBtn: any = document.querySelector(".prompt__submit");
const inputEl: any = document.querySelector(".prompt__input");
const saveLoaderContainer: any = document.querySelector(
  ".load-save__container"
);
const saveLoaderBtn: any = document.querySelector(".load-save__btn");
const fileSelector: HTMLInputElement | null =
  document.querySelector("#file-selector");

saveLoaderBtn.addEventListener("click", async () => {
  if (fileSelector?.files) {
    const gameInstance = await gameController.saveManager.load(
      fileSelector.files[0],
      new Render()
    );

    if (gameInstance) {
      gameController.player = gameInstance.player;
      gameController.newGameFromSave(gameInstance);
      if (!saveLoaderContainer.classList.contains("hide")) {
        saveLoaderContainer.classList.add("hide");
      }
    }
  }
});

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

  if (!saveLoaderContainer.classList.contains("hide")) {
    saveLoaderContainer.classList.add("hide");
  }
};

function useInventoryItem(id: string) {
  const item: HTMLDivElement | null = document.querySelector(
    ".itemSlot[data-item-id='" + id + "']"
  );
  if (gameController.gameInstance?.player.inventory) {
    if (item) {
      const itemId = item.getAttribute("data-item-id");

      if (itemId) {
        const result = gameController.gameInstance?.player.inventory.useItem(
          parseInt(itemId)
        );

        if (result) {
          gameController.handleSpecificAction(result.action, result.name);
        }
      }
    }
  }
}
declare const window: any;
window.useInventoryItem = useInventoryItem;
