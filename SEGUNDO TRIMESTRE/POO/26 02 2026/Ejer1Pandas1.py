import pandas as pd

# 1. Leer el archivo con ruta completa
try:
    estudiantes = pd.read_csv(r"POO/26 02 2026/Estudiante.csv")
    
except FileNotFoundError:
    print("Error: No se encontró el archivo Estudiante.csv")
    exit()

# 9. Menú principal
while True:
    print("\n========= MENÚ =========")
    print("1. Mostrar los 10 primeros registros")
    print("2. Mostrar estudiantes con promedio > 4.2")
    print("3. Mostrar estudiantes por sexo con edad > 21")
    print("4. Mostrar promedio del promedio por sexo")
    print("5. Mostrar estudiante(s) de mayor edad")
    print("6. Mostrar estudiantes con edad = 20 o promedio > 4.5")
    print("7. Generar archivo alto_rendimiento.csv")
    print("8. Salir")

    opcion = input("Seleccione una opción: ")

    # 2
    if opcion == "1":
        print("\nPrimeros 10 registros:")
        print(estudiantes.head(10))

    # 3
    elif opcion == "2":
        resultado = estudiantes[estudiantes['promedio'] > 4.2]
        print("\nEstudiantes con promedio > 4.2:")
        print(resultado)

    # 4
    elif opcion == "3":
        sexo = input("Ingrese el sexo (Masculino/Femenino): ")
        resultado = estudiantes[
            (estudiantes['sexo'] == sexo) &
            (estudiantes['edad'] > 21)
        ]
        print("\nResultado:")
        print(resultado)

    # 5
    elif opcion == "4":
        sexo = input("Ingrese el sexo (Masculino/Femenino): ")
        grupo = estudiantes[estudiantes['sexo'] == sexo]

        if len(grupo) > 0:
            promedio_general = grupo['promedio'].mean()
            print(f"\nPromedio del promedio ({sexo}): {promedio_general:.2f}")
        else:
            print("No hay estudiantes de ese sexo.")

    # 6
    elif opcion == "5":
        edad_maxima = estudiantes['edad'].max()
        resultado = estudiantes[estudiantes['edad'] == edad_maxima]
        print("\nEstudiante(s) de mayor edad:")
        print(resultado)

    # 7
    elif opcion == "6":
        resultado = estudiantes[
            (estudiantes['edad'] == 20) |
            (estudiantes['promedio'] > 4.5)
        ]
        print("\nResultado:")
        print(resultado)

    # 8
    elif opcion == "7":
        alto_rendimiento = estudiantes[estudiantes['promedio'] > 4.0]
        alto_rendimiento.to_csv(
            r"C:\Users\crist\OneDrive\Documentos\GitHubC\POO\26 02 2026\alto_rendimiento.csv",
            index=False
        )
        print("Archivo alto_rendimiento.csv generado correctamente.")

    # Salir
    elif opcion == "8":
        print("Saliendo del programa...")
        break

    else:
        print("Opción no válida.")