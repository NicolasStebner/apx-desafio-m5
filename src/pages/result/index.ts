import { state } from "../../state";
/*  */
export function initPageResult(params) {
    /*  */
    var contador = 2;
    const intervalo = setInterval(() => {
        var contenedorManoUser = div.querySelector(".base");
        contenedorManoUser!.style.transform = "translateY(-50px)";
        contenedorManoUser!.style.transform = "rotate(360deg);";
        contenedorManoUser!.style.transition = "all 1s ease-in-out";
        if (contador < 1) {
            clearInterval(intervalo);
            const button = div.querySelector(".button");
            button?.addEventListener("click", () => {
                params.goTo("/instructions");
            });
        }
        console.log("a", state.getLastResultOfUser());
        /*  setInterval(() => {
            console.log("a");
            var contenedorResultado = div.querySelector(".contenedor-resultado");
            contenedorResultado.style.display = "inherit";
        }, 2000); */
        contador--;
    }, 1000);
    /*  */
    const div = document.createElement("div");
    div.classList.add("contenedor");
    div.innerHTML = `
      <div class="contenedor-manos inverted">
          <hand-el class="hand" contexto="ingame" hand="${state.lastSelectComputer()}"></hand-el>
      </div>
      <div class="contenedor-manos base">
          <hand-el class="hand" contexto="ingame" hand="${state.lastSelectUser()}"></hand-el>
      </div>
      
      <div class="contenedor-resultado">
        <div>
          <h1>${state.getLastResultOfUser()}</h1>
        </div>
      </div>
      <div>
        <h2>Score</h2>
        <p>Vos: ${state.getHistory()[0]["vos"]}</p>
        <p>Máquina: ${state.getHistory()[0]["maquina"]}</p>
      </div>
      <div>
        <button-el class="button" label="Volver a jugar"></button-el>
      </div>
    `;

    /*  */
    return div;
}
