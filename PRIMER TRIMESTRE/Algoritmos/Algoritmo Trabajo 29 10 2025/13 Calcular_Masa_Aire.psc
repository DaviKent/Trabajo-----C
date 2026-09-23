Algoritmo Calcular_Masa_Aire
	
	Definir presion, volumen, temperatura, masa Como Real
	
	Escribir "Ingrese la presion del aire: "
	Leer presion
	
	Escribir "Ingrese el volumen del aire: "
	Leer volumen
	
	Escribir "Ingrese la temperatura del aire: "
	Leer temperatura
	
	masa <- trunc (presion * volumen) / (0.37 * (temperatura + 460))
	
	Escribir "La masa de aire es: ", masa
	
FinAlgoritmo
