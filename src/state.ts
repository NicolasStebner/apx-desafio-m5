const state = {
    lastSelectFromUser: "",
    lastSelectFromComputer: "",
    getState() {},
    setState() {},
    lastSelectUser() {
        return this.lastSelectFromUser;
    },
    lastSelectComputer() {
        return this.lastSelectFromComputer;
    },
    setSelectUser(opcion: String) {
        this.lastSelectFromUser = opcion;
    },
    setSelectComputer(opcion: String) {
        this.lastSelectFromComputer = opcion;
    },
};

export { state };
