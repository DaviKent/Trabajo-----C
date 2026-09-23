Algoritmo SumaParesImpares
	
	Definir num, sumaP, sumaI Como Entero
	sumaP <- 0
	sumaI <- 0
	
	Escribir "Digite un numero entero (0 para terminar): "
	Leer num
	
	Mientras num <> 0 Hacer
		si num % 2 = 0 Entonces
			sumaP <- sumaP + num
		SiNo
			sumaI <- sumaI + num
		FinSi
		
		Escribir "Digite otro numero (0 para terminar): "
		Leer num
	FinMientras
	
	Escribir "---------------------------------"
	Escribir "Suma de numeros pares: ", sumaP
	Escribir "suma de numeros impares: ", sumaI
	Escribir "---------------------------------"
	
FinAlgoritmo
