function play() {
    let players = new Player();
    let [player1, player2] = players.choose_player();

    let game = new Game(player1, player2);

    game.first_turn();

    while (true) {
        console.log(`Es el turno: ${game.turn}`);
        game.display_board(game.board);

        game.place_token();

        if (game.check_victory()) {
            game.display_board(game.board);
            break;
        };

        game.switch_turn();
        game.turn += 1;

        if (game.turn >= 9) {
            console.log("Tablero lleno. Empate.");
            break;
        };
    };
};

function main() {
    console.log(`Elige una posición en el tablero para colocar tu pieza.
Las filas y columnas están numeradas de 0 a 2.
Filas: Superior es 0 | Central es 1 | Inferior es 2
Columnas: Izquierda es 0 | Central es 1 | Derecha es 2\n`)

    play();
};

main();
