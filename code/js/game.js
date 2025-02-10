class Game {
    constructor(player1, player2) {
        this.players = [player1, player2];
        this.current_player = null;
        this.turn = 0;
        this.board = [[" ", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", " "]];
    };

    display_board(board) {
        for (let row = 0; row < board.length; row++) {
            console.log("-------");
            let p_row = "|";
            for (let col = 0; col < board[row].length; col++) {
                p_row += board[row][col] + "|";
            };
            console.log(p_row);
        };
        console.log("-------");
    };

    first_turn() {
        let random_number = Math.floor(Math.random() * 10); // de 0 a 9
    
        if (random_number % 2 == 0) {
            this.current_player = this.players[0]; // X
            console.log(`El jugador ${this.players[0]} tiene el primer turno.`);
        } else {
            this.current_player = this.players[1]; // 0
            console.log(`El jugador ${this.players[1]} tiene el primer turno.`);
        };
    };

    illegal_movements(row, col) {
        if ((row > 2 || row < 0) || (col > 2 || col < 0)) {
            console.log("Movimiento no permitido: pieza fuera del tablero.");
            return false;
        };

        if (["X", "O"].includes(this.board[row][col])) {
            console.log("Movimiento no permitido: celda ocupada.");
            return false;
        };
        return true;
    };

    place_token() {
        while (true) {
            try {
                let row = parseInt(prompt("Elige la fila: "));
                let col = parseInt(prompt("Elige la columna: "));

                if (this.illegal_movements(row, col)) {
                    this.board[row][col] = this.current_player;
                    break;
                };
            } catch {
                console.log("Elige un número entre 0 y 2.");
            };
        };
    };

    check_victory() {
        for (let row = 0; row < this.board.length; row++) {
            if (this.board[row][0] == this.current_player && this.board[row][1] == this.current_player && this.board[row][2] == this.current_player) {
                console.log(`Victoria de ${this.current_player}`);
                return true;
            };
        };

        for (let col = 0; col < this.board.length; col++) {
            if (this.board[0][col] == this.current_player && this.board[1][col] == this.current_player && this.board[2][col] == this.current_player) {
                console.log(`Victoria de ${this.current_player}`);
                return true;
            };
        };

        if (this.board[0][0] == this.current_player && this.board[1][1] == this.current_player && this.board[2][2] == this.current_player) {
            console.log(`Victoria de ${this.current_player}`);
            return true;
        } else if (this.board[0][2] == this.current_player && this.board[1][1] == this.current_player && this.board[2][0] == this.current_player) {
            console.log(`Victoria de ${this.current_player}`);
            return true;
        };
    };

    switch_turn() {
        if (this.current_player == this.players[0]) {
            this.current_player = this.players[1]; // O
        } else {
            this.current_player = this.players[0]; // X
        };
        console.log(`Es el turno de ${this.current_player}.`)
    };
};

