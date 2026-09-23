import pandas as pd
import os

# carpeta donde está el archivo original
carpeta1 = r"C:/Users/sena ia/Desktop/examen/Actividad 1"

# carpeta donde guardare el nuevo
carpeta2 = r"C:/Users/sena ia/Desktop/examen/Actividad 2"

# rutas completas
ruta = os.path.join(carpeta1, "inventario.csv")
ruta_nueva = os.path.join(carpeta2, "inventario_actualizado.csv")



#leer archivo inventario.csv


df = pd.read_csv(ruta)

print("Inventario:\n")
print(df)



#producto más costoso


mas_costoso = df.loc[df["precio"].idxmax()]

print("\nProducto más costoso:")
print(mas_costoso.to_frame())



# roducto con mayor cantidad


mayor_cantidad = df.loc[df["cantidad"].idxmax()]

print("\nProducto con mayor cantidad:")
print(mayor_cantidad.to_frame())



#crear columna valor_total


df["valor_total"] = df["precio"] * df["cantidad"]

print("\nInventario actualizado:\n")
print(df)



#guardar en Actividad 2


df.to_csv(ruta_nueva, index=False)

print("\nArchivo guardado en:", ruta_nueva)