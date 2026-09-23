Algoritmo Calificacion_Final
	Definir nota1, nota2, nota3, examen_final, trabajo_fianl, promedio, calificacion_fianl Como Real
	Escribir "Ingrese la primera calificacion parcial: "
	Leer nota1
	Escribir "Ingrese la segunda calificacion parcial: "
	Leer nota2
	Escribir "Ingrese la tercera calificacion parcial: "
	Leer nota3
	
	Escribir "Ingrese la calificacion del examen final: "
	Leer examen_final
	
	Escribir "Ingrese la calificacion del trabajo final: "
	Leer trabajo_fianl
	
	promedio <- (nota1 + nota2 + nota3) / 3
	
	calificacion_fianl <- Trunc(promedio * 0.55) + (examen_final * 0.30) + (trabajo_fianl * 0.15)
	
	Escribir "La calificacion final en la materia de Algoritmos es: ", calificacion_fianl
	
FinAlgoritmo
