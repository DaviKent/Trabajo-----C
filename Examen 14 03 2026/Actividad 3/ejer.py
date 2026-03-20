import pandas as pd
import os


#carpeta de trabajo


carpeta = r"C:/Users/sena ia/Desktop/examen/Actividad 3"

ruta_json = os.path.join(carpeta, "elecciones.json")
ruta_nueva = os.path.join(carpeta, "mayoria_mujeres_departamento.json")



#crear datos


datos = [
    {"Departamento": "Cauca", "Cantidad_Votantes_Hombres": 1200, "Cantidad_Votantes_Mujeres": 2400},
    {"Departamento": "Huila", "Cantidad_Votantes_Hombres": 4900, "Cantidad_Votantes_Mujeres": 3950},
    {"Departamento": "Nariño", "Cantidad_Votantes_Hombres": 3000, "Cantidad_Votantes_Mujeres": 4200},
    {"Departamento": "Valle", "Cantidad_Votantes_Hombres": 8000, "Cantidad_Votantes_Mujeres": 9000},
    {"Departamento": "Tolima", "Cantidad_Votantes_Hombres": 2500, "Cantidad_Votantes_Mujeres": 2600},
    {"Departamento": "Cundinamarca", "Cantidad_Votantes_Hombres": 7000, "Cantidad_Votantes_Mujeres": 6500},
    {"Departamento": "Antioquia", "Cantidad_Votantes_Hombres": 10000, "Cantidad_Votantes_Mujeres": 12000},
    {"Departamento": "Meta", "Cantidad_Votantes_Hombres": 1500, "Cantidad_Votantes_Mujeres": 1800},
    {"Departamento": "Putumayo", "Cantidad_Votantes_Hombres": 900, "Cantidad_Votantes_Mujeres": 1100},
    {"Departamento": "Caquetá", "Cantidad_Votantes_Hombres": 1300, "Cantidad_Votantes_Mujeres": 1700}
]

df = pd.DataFrame(datos)



#crear elecciones.json


df.to_json(ruta_json, orient="records", indent=4, force_ascii=False)

print("Archivo creado:", ruta_json)



#leer JSON


df2 = pd.read_json(ruta_json)

print("\nDatos elecciones:\n")
print(df2)



#filtrar donde mujeres > hombres


mayoria_mujeres = df2[
    df2["Cantidad_Votantes_Mujeres"] >
    df2["Cantidad_Votantes_Hombres"]
]

print("\nDepartamentos con mayoría de mujeres:\n")
print(mayoria_mujeres)



#guardar nuevo JSON


mayoria_mujeres.to_json(
    ruta_nueva,
    orient="records",
    indent=4,
    force_ascii=False
)

print("\nArchivo creado:", ruta_nueva)