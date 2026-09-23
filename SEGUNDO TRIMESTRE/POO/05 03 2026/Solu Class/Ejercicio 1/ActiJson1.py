import json
import pandas as pd
import os

#leer archivo json
productos = pd.read_json(r"C:/Users/crist/OneDrive/Documentos/GitHubC/POO/05 03 2026/Solu Class/Ejercicio 1/productos1.json")

#calcular valor total por producto
productos["valor total"] = productos["precio"] * productos["cantidad"]
print("Valor total por producto:")
print(productos[["producto","valor total"]])

totalInventario = productos["valor total"].sum()

print("\nValor total del inventario:", totalInventario)

bajoStock = productos[productos["cantidad"]<5]

#crea la ruta exacta donde esta mi carpeta .py
ruta = os.path.join(os.path.dirname(__file__), "productosBajoStock1.json")

bajoStock.to_json(ruta, orient="records", indent=4)
print("\nArchivo generado: productosBajoStock1.json")