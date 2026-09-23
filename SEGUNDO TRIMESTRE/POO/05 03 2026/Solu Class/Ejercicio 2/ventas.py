import pandas as pd
import json
import os


#leer archivo json
ventas = pd.read_json(r"C:/Users/crist/OneDrive/Documentos/GitHubC/POO/05 03 2026/Solu Class/Ejercicio 2/ventas2.json")

#total por vendedor
totalVendedor = ventas.groupby("vendedor")["ventas"].sum()

print("Total de ventas por vendedor:")
print(totalVendedor.to_frame())

#promedio mensual
promedioMensual = ventas["ventas"].mean()

print("\nPromedio mensual de ventas:", promedioMensual)

#vendedor con mayores ventas
mejorVendedor = totalVendedor.idxmax()
print("\nVendedor con mayor ventas:",mejorVendedor)


#ranking
ranking = totalVendedor.sort_values(ascending=False)

print("\nRanking de vendedores:")
print(ranking.to_frame())

#exportar ranking
ruta = os.path.join(os.path.dirname(__file__), "rankingVentas2.json")

ranking_df = ranking.reset_index()

ranking_df.to_json(ruta, orient="records", indent=4)
print("\nArchivo generado: rankingVentas2.json")

