Algoritmo EncuestaEstudio
	
	Definir n, i, opcion, primaria, secundaria, tecnica, profesional, posgrado Como Entero
	
	primaria = 0
	secundaria = 0
	tecnica = 0
	profesional = 0
	posgrado = 0
	
	Escribir "Ingrese el numero de personas encuestadas: "
	Leer n
	
	para i = 1 Hasta n Hacer
		Escribir "Persona ", i
		Escribir "Seleccione el nivel de estudios: "
		Escribir "1. Primaria"
		Escribir "2. Secundaria"
		Escribir "3. Carrera Tecnica"
		Escribir "4. Profesional"
		Escribir "5. Posgrado"
		Leer opcion
		
		Segun opcion Hacer
			1: primaria = primaria + 1
			2: secundaria = secundaria + 1
			3: tecnica = tecnica + 1
			4: profesional = profesional + 1
			5: posgrado = posgrado + 1
			De Otro Modo:
				Escribir "Opcion invalida, no se contabiliza"
		FinSegun
	FinPara
	
	//calcular porcentajes
	Escribir "Resultados del Censo"
	Escribir "Primaria: ", (primaria/n)*100, "%"
	Escribir "Secundaria: ", (secundaria/n)*100, "%"
	Escribir "Tecnica: ", (tecnica/n)*100, "%"
	Escribir "Profesional: ", (profesional/n)*100, "%"
	Escribir "Posgrado: ", (posgrado/n)*100, "%"
	
FinAlgoritmo
