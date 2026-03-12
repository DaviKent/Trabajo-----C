import pandas as pd
import json
import os

#leer archivo json
notas = pd.read_json(r"C:/Users/crist/OneDrive/Documentos/GitHubC/POO/05 03 2026/Solu Class/Ejercicio 3/calificaciones.json")

#agregar nuevo registro
estudiante = input("Nombre del estudiante: ")
materia = input("Materia: ")
nota = float(input("Nota: "))

nuevoRegistro = {
    "estudiante": estudiante,
    "materia": materia,
    "nota": nota
}

#agregar registro al dataframe
notas = pd.concat([notas, pd.DataFrame([nuevoRegistro])], ignore_index=True)

#actualizar json
datos = notas.to_dict(orient="records")

with open(r"C:/Users/crist/OneDrive/Documentos/GitHubC/POO/05 03 2026/Solu Class/Ejercicio 3/calificaciones.json","w", encoding="utf-8") as f:
    json.dump(datos,f,indent=4, ensure_ascii=False)

#estadisticas
promedio = notas["nota"].mean()
promedioEstudiante = notas.groupby("estudiante")["nota"].mean()

ranking = notas.sort_values(by="nota", ascending=False)

print("\nPromedio general:", promedio)
print("\nPromedio por estudiante")
print(promedioEstudiante.to_frame())

print("\nRanking de notas:")
print(ranking)

#exportar reportes
rutaCarpeta = os.path.dirname(__file__)

ranking.to_csv(os.path.join(rutaCarpeta,"reporteNotas.csv"), index=False)
ranking.to_json(os.path.join(rutaCarpeta,"reporteNotas.json"), orient="records", indent=4)

print("\nReportes exportados correctamente.")

