const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: "",
        },
        history: [{}],
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
    whoWins(myPlay, computerPlay) {
        const empate = myPlay == computerPlay;
        const ganeConTijeras = myPlay == "scissors" && computerPlay == "paper";
        const ganeConPaper = myPlay == "paper" && computerPlay == "rock";
        const ganeConPiedra = myPlay == "rock" && computerPlay == "scissors";
        const gane = [ganeConTijeras, ganeConPaper, ganeConPiedra].filter((e) => e == true).length;
        if (gane) {
            //uso del falsy ; 0 = false
            console.log("gane");
        } else if (empate) {
            console.log("empate");
        } else {
            console.log("perdiste");
        }
    },
};

export { state };
