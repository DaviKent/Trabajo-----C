import pandas as pd

print(pd.__version__)

estudiantes = pd.read_csv("estudiantes.csv")

print(type(estudiantes))

print(estudiantes)
print(estudiantes.head())
print(estudiantes.columns)
print(estudiantes.info)

#mostrar los nombres de los estudiantes

print(estudiantes["nombre"])

#mostrar nombres y promedio de cada estudiante

print(estudiantes[["nombre", "promedio"]])

#obtener cantidad de estudiantes con promedio > 4.0

cantidad = estudiantes[estudiantes["promedio"] > 4.0]
print(cantidad)

#imprimir promedio general
print("Promedio general estudiantes:", {estudiantes["promedio"].mean()})

#imprimir maxima nota
print("Nota maxima estudiantes:", estudiantes["promedio"].max)

cantidad.to_csv("estudiantesMayor4.csv", index=False)
cantidad.to_csv("estudiantesMayorV2.csv", index=True)