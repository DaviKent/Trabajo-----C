Algoritmo NumeroARomano
	
	Definir num Como Entero
	Definir romano como cadena
	
	Escribir "Ingrese un numero entre 1 y 10: "
	Leer num
	
	Segun num Hacer
		1: romano = "I"
		2: romano = "II"
		3: romano = "III"
		4: romano = "IV"
		5: romano = "V"
		6: romano = "VI"
		7: romano = "VII"
		8: romano = "VIII"
		9: romano = "IX"
		10: romano = "X"
		De Otro Modo:
			romano = "Numero fuera de rango"
	FinSegun
	
	Escribir "Resultado: ", romano
	
FinAlgoritmo
