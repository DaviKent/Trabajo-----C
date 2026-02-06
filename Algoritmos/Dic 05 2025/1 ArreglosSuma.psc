Algoritmo ArreglosSuma
	//definir las variables
	Dimension arreglo1[5]
	Dimension arreglo2[5]
	Dimension arregloSuma[5]
	Definir arreglo1, arreglo2, arregloSuma Como Entero
	Definir i Como Entero
	//mostrar arreglos
	Escribir "Ingrese los 5 numeros del primer arreglo:"
	Para i = 0 Hasta 4 Hacer
		Escribir "Numero ", i+1, ": "
		Leer arreglo1[i]
	FinPara
	Escribir "Ingrese los 5 numeros del segundo arreglo:"
	Para i = 0 Hasta 4 Hacer
		Escribir "Numero ", i+1, ": "
		Leer arreglo2[i]
	FinPara
	//se suman los arreglos
	Para i = 0 Hasta 4 Hacer
		arregloSuma[i] = arreglo1[i] + arreglo2[i]
	FinPara
	//mostrar los arreglos
	Escribir ""
	Escribir "Arreglo 1: "
	Para i = 0 Hasta 4 Hacer
		Escribir Sin Saltar arreglo1[i], "  "
	FinPara
	Escribir ""
	Escribir "Arreglo 2: "
	Para i = 0 Hasta 4 Hacer
		Escribir Sin Saltar arreglo2[i], "  "
	FinPara
	Escribir ""
	Escribir "Suma de los arreglos: "
	Para i = 0 Hasta 4 Hacer
		Escribir Sin Saltar arregloSuma[i], "  "
	FinPara
	Escribir ""
FinAlgoritmo