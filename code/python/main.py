# Python: 3.12.7

import game_flow as gf

def main():
    print("""Elige una posición en el tablero para colocar tu pieza.
Las filas y columnas están numeradas de 0 a 2.
Filas: Superior es 0 | Central es 1 | Inferior es 2
Columnas: Izquierda es 0 | Central es 1 | Derecha es 2\n""")
    
    gf.play()

if __name__ == "__main__":
    main()