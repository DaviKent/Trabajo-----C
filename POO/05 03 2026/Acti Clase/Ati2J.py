import pandas as pd

deportistas = pd.read_json("https://raw.githubusercontent.com/CesarMCuellarCha/archivosCSV/refs/heads/main/deportistas.json")

#print(deportistas)
#print(deportistas.info())

deportistas_bmx = deportistas[deportistas["deporte"]=="BMX"]

deportistas_bmx.to_json("deportistas_bmx.json", indent=4, orient="records", force_ascii=False)

print(deportistas_bmx)