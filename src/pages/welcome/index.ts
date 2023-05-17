//import { state } from "../../state";
export function initPageWelcome(params) {
    const div = document.createElement("div");
    div.classList.add("contenedor");
    div.innerHTML = `
      <title-el class="titulo" label="Piedra Papel ó Tijera"></title-el>
      <button-el class="button" label="Empezar"></button-el>
      <div class="contenedor-manos">
          <hand-el class="hand" hand="scissors"></hand-el>
          <hand-el class="hand" hand="rock"></hand-el>
          <hand-el class="hand" hand="paper"></hand-el>
      </div>
    `;
    var button = div.querySelector(".button");
    button?.addEventListener("click", () => {
        params.goTo("/instructions");
    });
    return div;
}
