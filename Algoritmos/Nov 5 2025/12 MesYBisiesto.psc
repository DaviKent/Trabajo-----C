Algoritmo MesYBisiesto
	
	Definir mes, anio Como Entero
	Definir dias Como Entero
	Definir Bisiesto Como Logico
	
	Escribir "Ingrese el mes de nacimiento (1-12): "
	Leer mes
	Escribir "Ingrese el año de nacimiento: "
	Leer anio
	
	//determinar si el año es bisiesto
	si (anio mod 4 = 0 y anio mod 100 <> 0) o (anio mod 400 = 0) Entonces
		Bisiesto = Verdadero
	SiNo
		Bisiesto = Falso
	FinSi
	
	//determinar los dias del mes
	segun mes Hacer
		1: dias = 31
		2:
			si Bisiesto Entonces
				dias = 29
			SiNo
				dias = 28
			FinSi
		3: dias = 31
		4: dias = 30
		5: dias = 31
		6: dias = 30
		7: dias = 31
		8: dias =31
		9: dias = 30
		10: dias = 31
		11: dias = 30
		12: dias = 31
		De Otro Modo:
			dias = -1 
			
	FinSegun
	
	si dias = -1 Entonces
		Escribir "Mes invalido."
	SiNo
		si Bisiesto Entonces
			Escribir "El año ", anio, " es bisiesto."
		SiNo
			Escribir "El año ", anio, " no es bisiesto."
		FinSi
		Escribir "El mes ", mes, " tiene ", dias, " dias."
	FinSi
	
FinAlgoritmo
