import game as g
import player as p

def play():
    players = p.Player()
    player1, player2 = players.choose_player()

    game = g.Game(player1, player2)

    game.first_turn()

    while True:
        print(f"Es el turno: {game.turn}")
        game.display_board(game.board)

        game.place_token()

        if game.check_victory():
            game.display_board(game.board)
            break

        game.switch_turn()
        game.turn += 1

        if game.turn >= 9:
            print("Tablero lleno. Empate.")
            break
