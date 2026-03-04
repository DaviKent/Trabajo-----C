class Autor():
    
    #contstructor
    def __init__(self, nombre, nacionalidad):
        self.__nombre = nombre
        self.__nacionalidad = nacionalidad
        
    def obtenerNombre(self):
        return self.__nombre
    def obtenerNacionalidad(self):
        return self.__nacionalidad
    
    def modificarNombre(self, nombre):
        self.__nombre = nombre
        
    def modificarNacionalidad(self, nacionalidad):
        self.__nacionalidad = nacionalidad 
        
class Libro():
    #constructor
    def __init__(self, titulo, genero, autor):
        self.titulo = titulo
        self.genero = genero
        self.autor = autor
        
class Biblioteca():
    
    def __init__(self, nombre):
        self.nombre = nombre
        self.libros = []
        
    def registrarLibro(self, libro):
        self.libros.append(libro)
        
class Usuario():
    def __init__(self, identificacion, nombre, correo):
        self.identificacion = identificacion
        self.nombre = nombre
        self.correo = correo
        
    def saludar(self):
        print(f"Hola desde Usuario soy un ebjeto tipo {type(self).__name__}")
    
class Estudidante(Usuario):
    
    def __init__(self, icfes, identificacion, nombre, correo):
        super().__init__(identificacion, nombre, correo)
        self.icfes = icfes
    
class Docente(Usuario):
    def __init__(self, especialidad, identificacion, nombre, correo):
        super().__init__(identificacion, nombre, correo)
        self.especialidad = especialidad
        
    def saludar(self):
        print(f"Desde Docente. Hola soy un objeto de tipo {type(self).__name__}")
        
        
class Prestamo():
    
    def __init__(self, fechaPrestamo, fechaDevolucion):
        self.fechaPrestamo = fechaPrestamo
        self.fechaDevolucion = fechaDevolucion
        self.usuario = None
        self.librosPrestamo = []
        
    def registrarPrestamo(self, libro, usuario):
        self.usuario = usuario
        self.librosPrestamo.append(libro)