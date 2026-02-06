Algoritmo MayorYMenorDeTres
	
	Definir  num1, num2, num3, mayor, menor Como Entero
	
	Escribir "Ingrese el pirmer numero: "
	Leer num1
	Escribir "Ingrese el segundo numero: "
	Leer num2
	Escribir "Ingrese el tercer numero: "
	Leer num3
	
	//asignar valores iniciales
	mayor <- num1
	menor <- num1
	
	//evaluar mayor
	si num2 > mayor Entonces
		mayor <- num2
	FinSi
	si num3 > mayor Entonces
		mayor <- num3
	FinSi
	//evaluar menor
	si num2 < menor Entonces
		menor <- num2
	FinSi
	si num3 < menor Entonces
		menor <- num3
	FinSi
	Escribir "El numero mayor es: ", mayor
	Escribir "El numero menor es: ", menor
	
FinAlgoritmo
