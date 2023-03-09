import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="prompt">
    <h1 class="prompt__title">Hello RPG game</h1>
    <p class="prompt__description">Bienvenue sur RPG game, veuillez entrer votre nom pour commencer une partie</p>
    <input type="text" class="prompt__input">
    <button class="prompt__submit">Continuer</button>
  </div>
`;
