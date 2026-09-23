Algoritmo ClasificacionEdades
	
	Definir edad, i, niños, jovenes, adultos, ancianos Como Entero
	
	niños = 0
	jovenes = 0
	adultos= 0 
	ancianos = 0
	
	para i = 1 Hasta 10 Hacer
		Escribir "Ingrese la edad de la persona ", i, ":"
		Leer edad
		si edad < 15 Entonces
			niños = niños + 1
		SiNo
			si edad >= 15 y edad < 18 Entonces
				jovenes = jovenes + 1
			SiNo
				si edad >= 18 y edad < 70 Entonces
					adultos = adultos + 1
				SiNo
					si edad >= 70 Entonces
						ancianos = ancianos + 1
					FinSi
				FinSi
			FinSi
		FinSi
	FinPara
	
	Escribir "Resultados de clasificacion"
	Escribir "Niños: ", niños
	Escribir "Jovenes: ", jovenes
	Escribir "Adultos: ", adultos
	Escribir "Ancianos: ", ancianos
	
FinAlgoritmo
