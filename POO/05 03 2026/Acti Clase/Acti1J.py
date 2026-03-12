import json
import pandas as pd

estudiantes = [
    {"documento": 11,"nombre":"Maria","edad": 23,"promedio": 4.2, "deportes": ["Minitejo","Futbol"]},
    {"documento": 12,"nombre":"Pedro","edad": 21,"promedio": 3.9, "deportes": ["Tejo","Futbol","Tenis de Mesa"]},
    {"documento": 13,"nombre":"Sara","edad": 18,"promedio": 4.4, "deportes": ["Voleybol","Basquetbol"]},
]

with open("estudiantes.json", "w", encoding= "utf-8") as archivo:
    json.dump(estudiantes, archivo, indent=4)

#leer el archivo

datos = pd.read_json("estudiantes.json")
print(datos)
