//import { state } from "../../state";
export function initPageInstructions(params) {
    const div = document.createElement("div");
    div.classList.add("contenedor");
    div.innerHTML = `
      <subtitle-el
      class="subtitulo"
      label="Presioná jugar
            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos."></subtitle-el>
      <button-el class="button" label="¡Jugar!"></button-el>
      <div class="contenedor-manos">
        <hand-el class="hand" hand="scissors"></hand-el>
        <hand-el class="hand" hand="rock"></hand-el>
        <hand-el class="hand" hand="paper"></hand-el>
      </div>
  `;
    var button = div.querySelector(".button");
    console.log("instructions");
    button?.addEventListener("click", () => {
        params.goTo("game");
    });
    return div;
}
