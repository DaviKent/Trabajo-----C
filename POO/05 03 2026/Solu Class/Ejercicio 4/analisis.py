import pandas as pd
import os

ruta = os.path.dirname(__file__)

url = "https://raw.githubusercontent.com/CesarMCuellarCha/archivosCSV/refs/heads/main/SENA.matriculados.json"

datos = pd.read_json(url)

#filtro programa ADSO
adso = datos[datos["PROGRAMA"] == "ANALISIS Y DESARROLLO DE SOFTWARE."]

#exportar json
adso.to_json(os.path.join(ruta,"ADSO-CTPI.json"), orient="records", indent=4, force_ascii=False)

#filtro ficha
ficha = adso[adso["FICHA"] == 3312932]

print("Aprendices ficha 3312932:")
print(ficha)

#filtro codigo programa y estado
filtroEstado = datos[(datos["CODIGO_PROGRAMA"] == 228118) & (datos["ESTADO_APRENDIZ"] == "En transito")]

#cantidad
print("\nCantidad de aprendices en tránsito del programa 228118:")
print(len(filtroEstado))