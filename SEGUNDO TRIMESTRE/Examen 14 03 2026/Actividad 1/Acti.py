import csv
import os

# carpeta donde está el archivo
carpeta = r"C:/Users/sena ia/Desktop/examen/Actividad 1"

# crear ruta completa
ruta = os.path.join(carpeta, "inventario.csv")



#crear archivo inventario.csv


datos = [
    ["codigo", "nombre", "precio", "cantidad"],
    ["P01", "Teclado", 50000, 10],
    ["P02", "Mouse", 30000, 15],
    ["P03", "Monitor", 450000, 5],
    ["P04", "USB 32GB", 25000, 20],
    ["P05", "Audifonos", 80000, 8]
]

with open(ruta, "w", newline="", encoding="utf-8") as archivo:
    escritor = csv.writer(archivo)
    escritor.writerows(datos)

print("Archivo creado en:", ruta)



#leer archivo CSV


total = 0

with open(ruta, "r", encoding="utf-8") as archivo:
    lector = csv.DictReader(archivo)

    print("\nLista de productos:\n")

    for fila in lector:
        codigo = fila["codigo"]
        nombre = fila["nombre"]
        precio = int(fila["precio"])
        cantidad = int(fila["cantidad"])

        print(codigo, nombre, precio, cantidad)

        total += precio * cantidad



#total inventario


print("\nValor total del inventario:", total)