Algoritmo NumeroPalindromo
	
	Definir num, centena, decena, unidad, invertido Como Entero
	Escribir "Ingrese un numero entero de 3 digitos y mayor que 0: "
	Leer num
	
	//validacion
	si num <= 0 Entonces
		Escribir "El numero debe ser positivo. "
	FinSi
	si num < 100 o num > 999 Entonces
		Escribir "El numero debe tener exactamente 3 digitos. "
	FinSi
	
	//separar digitos
	centena <- num / 100
	decena <- (num % 100) / 10
	unidad <- num % 10
	
	//contruir numero invertido
	invertido <- unidad * 100 + decena * 10 + centena
	
	//comprar
	si num = invertido Entonces
		Escribir "El numero ", num, " es igual al derecho y al reves."
	SiNo
		Escribir "El numero ", num, " NO es igual al derecho y al reves."
	FinSi
	
	
	
FinAlgoritmo
