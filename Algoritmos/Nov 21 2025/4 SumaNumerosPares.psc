Algoritmo SumaNumerosPares
	
	Definir i, numeroP, suma Como Entero
	
	suma = 0
	numeroP = 2 //primer numero par
	
	para i = 1 hasta 50 Hacer
		suma = suma + numeroP
		numeroP = numeroP + 2
	FinPara
	
	Escribir "La suma de los primeros 50 numeros pares es: ", suma
	
FinAlgoritmo
