const state = {
    data: {
        currentGame: {
            myPlay: "rock",
            computerPlay: "paper",
        },
        history: [{ lastResult: "" }],
    },
    init() {
        const userVSPc = {
            user: 0,
            pc: 0,
        };
        const objectString = JSON.stringify(userVSPc);
        localStorage.setItem("userHistorial", objectString);
    },
    getState() {
        return this.data;
    },
    setState(data) {
        this.data = data;
    },
    lastSelectUser() {
        const cs = this.getState();
        return cs.currentGame["myPlay"];
    },
    lastSelectComputer() {
        const cs = this.getState();
        return cs.currentGame["computerPlay"];
    },
    setSelectUser(move) {
        const cs = this.getState();
        cs.currentGame["myPlay"] = move;
        this.setState(cs);
    },
    setSelectComputer(move) {
        const cs = this.getState();
        cs.currentGame.computerPlay = move;
        this.setState(cs);
    },
    getLastResultOfUser() {
        const cs = this.getState();
        var csHistoryUpper = cs.history["lastResult"].toUpperCase();
        return csHistoryUpper;
    },
    setLastMatchResult(result: "GANASTE" | "PERDISTE" | "EMPATASTE") {
        const cs = this.getState();
        cs.history["lastResult"] = result;
        this.refreshHistorial(result);
        this.setState(cs);
    },
    refreshHistorial(result) {
        const historial = JSON.parse(localStorage.getItem("userHistorial"));
        if (result == "GANASTE") {
            historial["user"] += 1;
            const objectString = JSON.stringify(historial);
            localStorage.setItem("userHistorial", objectString);
        } else if (result == "PERDISTE") {
            historial["pc"] += 1;
            const objectString = JSON.stringify(historial);
            localStorage.setItem("userHistorial", objectString);
        }
    },
    whoWins(myPlay, computerPlay) {
        const empate = myPlay == computerPlay;
        const ganeConTijeras = myPlay == "scissors" && computerPlay == "paper";
        const ganeConPaper = myPlay == "paper" && computerPlay == "rock";
        const ganeConPiedra = myPlay == "rock" && computerPlay == "scissors";
        const gane = [ganeConTijeras, ganeConPaper, ganeConPiedra].filter((e) => e == true).length;
        if (gane) {
            //uso del falsy ; 0 = false
            this.setLastMatchResult("GANASTE");
        } else if (empate) {
            this.setLastMatchResult("EMPATASTE");
        } else {
            this.setLastMatchResult("PERDISTE");
        }
    },
    getHistory() {
        const cs = this.getState();
        return cs.history;
    },
};

export { state };
