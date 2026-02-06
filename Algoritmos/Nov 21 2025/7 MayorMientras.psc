Algoritmo MayorMientras
	
	Definir n, contador Como Entero
	Definir numero, mayor Como Real
	
	Escribir "Ingrese la cantidad de numeros: "
	Leer n
	
	contador = 1
	
	Escribir "Ingrese un numero: "
	Leer numero
	mayor = numero //el primero es el mayor inicial
	
	Mientras contador < n Hacer
		Escribir "Ingrese un numero: "
		Leer numero
		//verificar si es mayor
		si numero > mayor Entonces
			mayor = numero
		FinSi
		contador = contador + 1
	FinMientras
	
	Escribir "El mayor numero es: ", mayor
FinAlgoritmo
