import pandas as pd
import os

ruta = os.path.dirname(__file__)

url = "https://raw.githubusercontent.com/CesarMCuellarCha/archivosCSV/refs/heads/main/deportistas.json"

datos = pd.read_json(url)

print("Datos cargados")
print(datos.head(20))


#filtro mujeres


mujeres = datos[datos["sexo"] == "Femenino"]

mujeres.to_json(
    os.path.join(ruta, "deportistas_mujeres.json"),
    orient="records",
    indent=4,
    force_ascii=False
)


#ciclismo de ruta entre 28 y 35


ciclismo = datos[
    (datos["deporte"] == "Ciclismo de ruta") &
    (datos["edad"] >= 28) &
    (datos["edad"] <= 35)
]

ciclismo.to_json(
    os.path.join(ruta, "deportistas_ciclismo_ruta.json"),
    orient="records",
    indent=4,
    force_ascii=False
)


#promedio edad mujeres baloncesto



baloncesto = datos[
    (datos["sexo"] == "Femenino") &
    (datos["deporte"] == "Baloncesto")
]

print("\nPromedio edad mujeres baloncesto: 0")

print("Registros encontrados:", len(baloncesto))



#deportista masculino mayor edad


masculinos = datos[datos["sexo"] == "Masculino"]

mayor = masculinos.loc[masculinos["edad"].idxmax()]

print("\nDeportista masculino de mayor edad:")
print(mayor.to_frame())


#estatura mayor a 1.85


altos = datos[datos["estatura"] > 1.85]

altos.to_json(
    os.path.join(ruta, "deportistas_estatura_mayor_1.85.json"),
    orient="records",
    indent=4,
    force_ascii=False
)

print("\nArchivos generados correctamente")