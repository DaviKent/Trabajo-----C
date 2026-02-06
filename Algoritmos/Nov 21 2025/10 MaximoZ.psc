Algoritmo MaximoZ
	
	Definir x, yy, z, mejorZ, mejorX, mejorY Como Real 
	Definir i Como Entero
	
	mejorZ = -1 //para que cualquier valor calculado sea mejor
	para i = 1 Hasta 100 Hacer
		//generar valores aleatorios entre -5 y 5
		x = Aleatorio(-5,5)
		yy = Aleatorio(-5,5)
		
		//calcular z
		z = (x * x) + (yy * yy)
		//actualizar si es mejor
		si z > mejorZ Entonces
			mejorZ = z
			mejorX = x
			mejorY = yy
		FinSi
	FinPara
	//mostrar resultados
	Escribir "---------------------------------"
	Escribir "Mejor valor encontrado: "
	Escribir "x = ", mejorX
	Escribir "y = ", mejorY
	Escribir "z = ", mejorZ
	Escribir "---------------------------------"
FinAlgoritmo
