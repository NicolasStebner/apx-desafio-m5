const hands = {
    rock: require("../../assets/piedra.png"),
    paper: require("../../assets/papel.png"),
    scissors: require("../../assets/tijera.png"),
};

export function init() {
    class HandComponent extends HTMLElement {
        constructor() {
            super();
            this.refactor();
        }
        refactor() {
            var hand = this.getAttribute("hand") || "rock";
            var style = document.createElement("style");
            style.textContent = `
                :host{
                  display:block;
                }
              `;
            var shadow = this.attachShadow({ mode: "open" });
            shadow.appendChild(style);

            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", hands[hand]);
            //Agrego al shadow
            shadow.appendChild(imgEl);
        }
    }
    customElements.define("hand-el", HandComponent);
}
