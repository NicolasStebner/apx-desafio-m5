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
            var contenedorResultado = div.querySelector(".contenedor-resultado");
            modificarColorDeFondoContenedorResultado(contenedorResultado);
            contador--;
        }
        contador--;
    }, 1000);
    /*  */
    const div = document.createElement("div");
    div.classList.add("contenedor");
    const localStorageNow = JSON.parse(localStorage.getItem("userHistorial"));
    div.innerHTML = `
      <div class="contenedor-manos inverted">
          <hand-el class="hand" contexto="ingame" hand="${state.lastSelectComputer()}"></hand-el>
      </div>
      <div class="contenedor-manos base">
          <hand-el class="hand" contexto="ingame" hand="${state.lastSelectUser()}"></hand-el>
      </div>
      
      <div class="contenedor-resultado">
        <div class="resultado-posta">
          <h1>${state.getLastResultOfUser()}</h1>
        </div>
        <div class="resultado-score">
          <h2 class="resultado-score-text">Score</h2>
          <p>Vos: ${localStorageNow["user"]}</p>
          <p>Máquina: ${localStorageNow["pc"]}</p>
        </div>
        <div class="button-volver-a-jugar">
          <button-el class="button" label="Volver a jugar"></button-el>
        </div>
      </div>
    `;
    /*  */
    return div;
}

function modificarColorDeFondoContenedorResultado(contenedorResultado) {
    if (state.getLastResultOfUser() == "PERDISTE") {
        contenedorResultado.style.background = "rgba(137, 73, 73, 0.9)";
    } else if (state.getLastResultOfUser() == "EMPATASTE") {
        contenedorResultado.style.background = "rgba(187, 187, 62,0.9)";
    } else {
        contenedorResultado.style.background = "rgba(128, 231, 48, 0.9)";
    }
    contenedorResultado!.style.display = "flex";
}
