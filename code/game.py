import random

class Game():
    def __init__(self, player1, player2):
        self.players = [player1, player2]
        self.current_player = None
        self.turn = 0
        self.board = [[" ", " ", " "], 
            [" ", " ", " "], 
            [" ", " ", " "]]
        
    def display_board(self, board):
        for row in board:
            print("-------")
            p_row = "|"
            for col in row:
                p_row += col + "|"
            print(p_row)
        print("-------")

    def first_turn(self):
        random_number = random.randint(0, 9)

        if random_number % 2 == 0:
            self.current_player = self.players[0] # X
            print(f"El jugador {self.players[0]} tiene el primer turno.")
        else:
            self.current_player = self.players[1] # O
            print(f"El jugador {self.players[1]} tiene el primer turno.")

    def illegal_movements(self, row, col):
        if (row > 2 or row < 0) or (col > 2 or col < 0):
            print("Movimiento no permitido: pieza fuera del tablero.")
            return False
        
        if self.board[row][col] in ["X", "O"]:
            print("Movimiento no permitido: celda ocupada.")
            return False  
        
        return True

    def place_token(self):
        while True:
            try:
                row = int(input("Elige la fila: "))
                col = int(input("Elige la columna: "))

                if self.illegal_movements(row, col):
                    self.board[row][col] = self.current_player
                    break
            except ValueError:
                print("Elige un número entre 0 y 2.")
    
    def check_victory(self):
        for row in self.board:
            if row[0] == self.current_player and row[1] == self.current_player and row[2] == self.current_player:
                print(f"Victoria de {self.current_player}")
                return True
            
        for col in range(len(self.board)):
            if self.board[0][col] == self.current_player and self.board[1][col] == self.current_player and self.board[2][col] == self.current_player:
                print(f"Victoria de {self.current_player}")
                return True
        
        if self.board[0][0] == self.current_player and self.board[1][1] == self.current_player and self.board[2][2] == self.current_player:
            print(f"Victoria de {self.current_player}")
            return True
        elif self.board[0][2] == self.current_player and self.board[1][1] == self.current_player and self.board[2][0] == self.current_player:
            print(f"Victoria de {self.current_player}")
            return True
        
    def switch_turn(self):
        if self.current_player == self.players[0]:
            self.current_player = self.players[1] # O
        else:
            self.current_player = self.players[0] # X

        print(f"Es el turno de {self.current_player}")