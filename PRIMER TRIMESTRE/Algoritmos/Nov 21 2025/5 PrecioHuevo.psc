Algoritmo PrecioHuevo
	
	Definir n, i Como Entero
	Definir peso, altura, huevos, calidad, sumaCalidad, promedio, precioporKilo Como Real
	
	sumaCalidad = 0
	
	Escribir "Ingrese el numero de gallinas: "
	Leer n
	
	para i = 1 Hasta n Hacer
		Escribir "Gallina ", i
		Escribir "Ingrese el peso: "
		Leer peso
		
		Escribir "Ingrese la altura: "
		Leer altura
		
		Escribir "Ingrese el numero de huevos que pone: "
		Leer huevos
		
		calidad = (peso * altura) / huevos
		sumaCalidad = sumaCalidad + calidad
		
	FinPara
	
	promedio = sumaCalidad / n
	//aplicar tabla de precio por kilo
	si promedio >= 15 Entonces
		precioporKilo = 1.2 * promedio
	SiNo
		precioporKilo = 0.8 * promedio
	FinSi
	Escribir "-----------------------------------------------------------"
	Escribir "El promedio de calidad es: ", promedio
	Escribir "EL precio sugerido por kilo de huevo es: ", precioporKilo
	Escribir "-----------------------------------------------------------"
FinAlgoritmo
