Algoritmo Tiempo_promedio_carrera
	
	Definir lunes, miercoles, viernes, pormedio Como Real
	
	Escribir "Ingrese el tiempo del dia lunes (en minutos): "
	Leer lunes
	
	Escribir "Ingrese el tiempo del dia miercoles (en minutos): "
	Leer miercoles
	
	Escribir "Ingrese el tiempo del dia viernes (en minutos): "
	Leer viernes
	
	promedio <- trunc (lunes + miercoles + viernes) / 3
	
	Escribir "El tiempo promedio de la semana es: ", promedio, " minutos "
	
FinAlgoritmo
