Algoritmo VocalONo
	
	Definir letra Como Caracter
	Escribir "Ingrese una letra: "
	Leer letra
	
	//convertir a minuscula para evitar problemas
	
	letra = Minusculas(letra)
	
	Si letra = "a" o letra = "e" o letra = "i" o letra = "o" o letra = "u" Entonces
		Escribir "La letra ", letra, " es una vocal "
	SiNo
		Escribir "La letra ", letra, " NO es una vocal "
	FinSi
	
FinAlgoritmo
