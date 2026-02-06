Algoritmo DigitosIguales
	
	Definir num, decena, unidad Como Entero
	
	Escribir "Ingrese un numero entero de dos digitos: "
	Leer num
	
	decena <- num / 10 //division entera
	unidad <- num % 10 //residuo
	
	Si decena = unidad Entonces
		Escribir "Los dos digitos son iguales: "
	SiNo
		Escribir "Los dos digitos son diferentes: "
	FinSi
	
FinAlgoritmo
