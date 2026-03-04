from ClasesEP1 import * 
from datetime import datetime as dt, timedelta

miBiblioteca = Biblioteca("SENA - CTPI")

autor1 = Autor("Gabriel García Márquez","Colombiano")
autor2 = Autor("José Eustacio Rivera","Colombiano")

libro1 = Libro("Cien Años de Soledad","Novela",autor1)

print(f"Libro: {libro1.titulo}")
print(f"Autor: {libro1.autor.obtenerNombre()}{libro1.autor.obtenerNacionalidad()}")
print(f"Nacionalidad Autor: {libro1.autor.obtenerNacionalidad()}")

miBiblioteca.registrarLibro(libro1)

autor3 = Autor("Robert Greene","Estadounidense")
libro2 = Libro("Las cuarentayocho leyer del poder","Economía",autor3)

miBiblioteca.registrarLibro(libro2)

print("Lista de Libros de la Biblioteca")
for libro in miBiblioteca.libros: 
    print(f"Título Libro: {libro.titulo}")
    print(f"Autor: {libro.autor.obtenerNombre()}")
    print("*"*20)

docente1 = Docente("Software",11,"Pablo Rojas","projas@sena.edu.co")
estidiante1 = Estudidante(290,12,"Juan Lozano","jlozano@gmail.com")

fechaPrestamo = dt.now() #fecha actual
print(fechaPrestamo)

dias_prestamo = timedelta(days = 5)
fechaDevolucion = fechaPrestamo + dias_prestamo
print(fechaDevolucion)
prestamo1 = Prestamo(fechaPrestamo, fechaDevolucion)
prestamo1.registrarPrestamo(libro1, estidiante1)


#autor1.nacionalidad = "Mexicano"
autor1.modificarNacionalidad("Mexicano")


print(f"Nombre Autor: {autor1.obtenerNombre()}")
print(f"Nacionalidad Autor: {autor1.obtenerNacionalidad()}")



docente1.saludar()
estidiante1.saludar() 