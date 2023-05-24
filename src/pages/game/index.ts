import { state } from "../../state";
export function initPageGame(params) {
    var counter = 3;
    const intervalo = setInterval(() => {
        var div = document.querySelector(".intervaloContador");
        div!.innerHTML = `${counter}`;
        if (counter < 1) {
            clearInterval(intervalo);
            pcEligeMano();
            /* console.log(state.lastSelectUser());
            console.log(state.lastSelectComputer()); */
        }
        counter--;
    }, 1000);

    const div = document.createElement("div");
    div.classList.add("contenedor");
    div.innerHTML = `
    <div class="intervaloContador"></div>
    <div class="contenedor-manos">
      <hand-el class="hand" contexto="ingame" onclick=true hand="scissors"></hand-el>
      <hand-el class="hand" contexto="ingame" onclick=true hand="rock"></hand-el>
      <hand-el class="hand" contexto="ingame" onclick=true hand="paper"></hand-el>
    </div>
    `;
    const manos = div.querySelectorAll(".hand");
    manos.forEach((mano) => {
        mano.addEventListener("click", () => {
            state.setSelectUser(mano.getAttribute("hand") || state.lastSelectUser());
        });
    });
    return div;
}
function pcEligeMano() {
    const opciones = ["scissors", "rock", "paper"];
    const random = Math.floor(Math.random() * opciones.length);
    state.setSelectComputer(opciones[random]);
}
