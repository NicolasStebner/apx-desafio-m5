const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: "",
        },
        history: [{ vos: 0, maquina: 0, lastResult: "" }],
    },
    getState() {
        return this.data;
    },
    setState() {},
    lastSelectUser() {
        return this.data.currentGame.myPlay;
    },
    lastSelectComputer() {
        return this.data.currentGame.computerPlay;
    },
    setSelectUser(move) {
        const cs = this.getState();
        cs.currentGame.myPlay = move;
    },
    setSelectComputer(move) {
        const cs = this.getState();
        cs.currentGame.computerPlay = move;
    },
    getLastResultOfUser() {
        const cs = this.getHistory();
        return cs["lastResult"];
    },
    setLastMatchResult(result: "ganaste" | "perdiste" | "empataste") {
        const cs = this.getHistory();
        cs["lastResult"] = result;
    },
    whoWins(myPlay, computerPlay) {
        const empate = myPlay == computerPlay;
        const ganeConTijeras = myPlay == "scissors" && computerPlay == "paper";
        const ganeConPaper = myPlay == "paper" && computerPlay == "rock";
        const ganeConPiedra = myPlay == "rock" && computerPlay == "scissors";
        const gane = [ganeConTijeras, ganeConPaper, ganeConPiedra].filter((e) => e == true).length;
        if (gane) {
            //uso del falsy ; 0 = false
            this.setLastMatchResult("ganaste");
        } else if (empate) {
            this.setLastMatchResult("empataste");
        } else {
            this.setLastMatchResult("perdiste");
        }
    },
    getHistory() {
        const cs = this.getState();
        return cs.history;
    },
};

export { state };
