class Player {
    constructor() {
        this.player1 = null;
        this.player2 = null;
    };

    choose_player() {
        while (true) {
            let player = prompt("¿Quieres ser X u O?").toUpperCase();

            if (player == "X") {
                this.player1 = "X";
                this.player2 = "O";
                console.log(`El primer jugador es ${this.player1} y el segundo jugador es ${this.player2}.`);
                break;
            } else if (player == "O") {
                this.player1 = "O";
                this.player2 = "X";
                console.log(`El primer jugador es ${this.player1} y el segundo jugador es ${this.player2}.`);
                break;
            } else {
                console.log("Elige X u O.")
            };
        };
        return [this.player1, this.player2];
    };
};
