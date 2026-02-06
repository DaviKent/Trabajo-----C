# programa de gestion de contactos

contactos = []

def agregar_contacto():
    print("\n--- Agregar contacto ---")
    identificacion = input("Identificación: ")
    
    # Verificar que no exista la identificacion
    for c in contactos:
        if c["Identificacion"] == identificacion:
            print("Ya existe un contacto con esa identificación.")
            return
        
    nombres = input("Nombres: ")
    apellidos = input("Apellidos: ")
    correo = input("Correo: ")
    genero = input("Genero: ")
    
    contacto = {
        "identificacion": identificacion,
        "nombres": nombres,
        "apellidos": apellidos,
        "correo": correo,
        "genero": genero
    }
    
    contacto.append(contacto)
    print("Contacto agregado correctamente.")
    
def consultar_contacto():
    print("\n--- Consultar contacto ---")
    identificacion = input("Ingrese la identificación: ")
    
    for c in contactos:
        if c["identificacion"] == identificacion:
            print("\nContacto encontrado: ")
            print("Identificacion:", c["identificacion"])
            print("Nombres:", c["nombres"])
            print("Apellidos:", c["apellidos"])
            print("Correo", c["correo"])
            print("Género", c["genero"])
            return
        
    print("Contacto NO encontrado.")
    
def listar_contactos():
    print("\n--- Lista de Contactos ---")
    if not contactos:
        print("No hay contactos registrados.")
        return
    
    for c in contactos:
        print("Identificacion:", c["identificacion"])
        print("Nombres", c["nombres"])
        print("Apellidos", c["apellidos"])
        print("Correo", c["correo"])
        print("Género", c["genero"])
        
def menu():
    while True:
        print("\nGestión de Contactos")
        print("1. Agregar")
        print("2. Consultar por identificacion")
        print("3. Listar Contactos")
        print("4. Salir")
        
        opcion = input("Ingrese opción: ")
        if opcion == "1":
            agregar_contacto()
        elif opcion == "2":
            consultar_contacto()
        elif opcion == "3":
            listar_contactos
        elif opcion == "4":
            print("Saliendo del programa...")
            break
        else:
            print("Opción inválida.")
            
# Ejecutar programa
menu()