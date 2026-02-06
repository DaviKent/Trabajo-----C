Algoritmo EvaluacionCualitativa
	
	Definir nota Como Real
	Escribir "Ingrese la nota obtenida: "
	Leer nota
	
	si nota >= 9.5 Entonces
		Escribir "Exelente"
	SiNo
		si nota >= 7 y nota < 9.5 Entonces
			Escribir "Bueno"
		SiNo
			si nota >= 5 y nota < 7 Entonces
				Escribir "Regular"
			SiNo
				si nota < 5 Entonces
					Escribir "Deficiente"
				FinSi
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
