Algoritmo Separar_Digitos
	Definir  num, decena, unidad Como Entero
	Escribir "Ingrese un numero entero de dos digitos: "
	Leer num
	decena <- TRUNC(num / 10)
	unidad <- num % 10
	Escribir "decena: ", decena
	Escribir "unidad:", unidad
	
FinAlgoritmo
