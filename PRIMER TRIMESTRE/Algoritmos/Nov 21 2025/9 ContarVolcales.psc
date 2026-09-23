Algoritmo ContarVolcales
	
	Definir texto, letra como cadena
	Definir i, longitudd, vocales Como Entero
	
	vocales = 0
	
	Escribir "Ingrese una cadena de texto: "
	Leer texto
	longitudd = Longitud(texto)
	para i = 1 Hasta longitudd Hacer
		letra = Subcadena(texto, i, i)
		si letra = "a" o letra = "e" o letra = "I" o letra = "o" o letra = "u" o letra = "A" o letra = "E" o letra = "I" o letra = "O" o letra = "U" Entonces
			vocales = vocales + 1
		FinSi
	FinPara
	Escribir "La cantidad de vocales es: ", vocales
FinAlgoritmo
