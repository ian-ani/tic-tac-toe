class Player():
    def __init__(self):
        self.player1 = None
        self.player2 = None

    def choose_player(self):
        while True:
            player = input("¿Quieres ser X u O?").upper()
        
            if player == "X":
                self.player1 = "X"
                self.player2 = "O"
                print(f"El primer jugador es {self.player1} y el segundo jugador es {self.player2}.")
                break
            elif player == "O":
                self.player1 = "O"
                self.player2 = "X"
                print(f"El primer jugador es {self.player1} y el segundo jugador es {self.player2}.")
                break
            else:
                print("Elige X u O.")
            
        return self.player1, self.player2
    