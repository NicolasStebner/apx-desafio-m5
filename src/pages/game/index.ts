import { state } from "../../state";
export function initPageGame(params) {
    var counter = 3;
    const intervalo = setInterval(() => {
        var div = document.querySelector(".intervaloContador");
        div!.innerHTML = `${counter}`;
        if (counter < 1) {
            clearInterval(intervalo);
            pcEligeMano();
            state.whoWins(state.lastSelectUser(), state.lastSelectComputer());
            setInterval(() => {
                params.goTo("/instructions");
            }, 3000);
        }
        counter--;
    }, 1000);

    const div = document.createElement("div");
    div.classList.add("contenedor");
    div.innerHTML = `
    <div class="intervaloContador"></div>
    <div class="contenedor-manos">
        <hand-el contexto="ingame" hand="scissors"></hand-el>
        <hand-el contexto="ingame" hand="rock"></hand-el>
        <hand-el contexto="ingame" hand="paper"></hand-el>
    </div>
    `;
    /*  */
    const manosEl = div.querySelectorAll("hand-el");
    console.log(manosEl);
    manosEl.forEach((mano) => {
        mano.addEventListener("click", () => {
            state.setSelectUser(mano.getAttribute("hand") || state.lastSelectUser());
            /* var ultimaMano = mano;
            console.log(ultimaMano); */
        });
    });
    return div;
}
function pcEligeMano() {
    const opciones = ["scissors", "rock", "paper"];
    const random = Math.floor(Math.random() * opciones.length);
    state.setSelectComputer(opciones[random]);
}
