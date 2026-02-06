Algoritmo OperacionesSegunOrden
	
	Definir num1, num2, suma, diferencia, producto, division Como Real
	Escribir "Ingrese el pirmer numero: "
	Leer num1
	Escribir "Ingrese el segundo numero: "
	Leer num2
	
	Si num1 > num2 Entonces
		suma <- num1 + num2
		diferencia <- num1 - num2
		
		Escribir "La suma es: ", suma
		Escribir "La diferencia es: ", diferencia
	SiNo
		producto <- num1 * num2
		division <- num1 / num2
		
		Escribir "El producto es: ", producto
		Escribir "La division es: ", division
	FinSi
	
FinAlgoritmo
