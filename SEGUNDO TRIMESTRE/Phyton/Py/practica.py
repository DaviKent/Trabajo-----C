class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        print("Hola, mi nombre es", self.nombre)

    def cumplir_anios(self):
        self.edad += 1
        print("Ahora tengo", self.edad, "años")


# Crear objetos
persona1 = Persona("Carlos", 20)
persona2 = Persona("Ana", 25)

# Acceder a métodos
persona1.saludar()

# Modificar atributo
persona1.cumplir_anios()

# Acceso directo a atributo
print(persona2.nombre)