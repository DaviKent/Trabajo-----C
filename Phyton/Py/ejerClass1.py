#crear una clasa
class Persona:
    pass
#crear un contructor de una clase
class Persona:
    def __init__(self):
        print("Se ha creado una persona")
#inicializar un atributo de una clase 
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
#crear un metodo o funcion de una clase
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        print("Hola, mi nombre es", self.nombre)

    def cumplir_anios(self):
        self.edad += 1
#crear objeto de una clase
        
persona1 = Persona("Carlos", 20)
persona2 = Persona("Ana", 25)

#modificar un atributo de un objeto

persona1.edad = 21
persona1.cumplir_anios()

#acceder a metodo de clase

persona1.saludar()
