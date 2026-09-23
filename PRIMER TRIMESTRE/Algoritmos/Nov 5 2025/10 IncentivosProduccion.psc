Algoritmo IncentivosProduccion
	
	Definir nombre como cadena
	Definir l, m, mi, j, v, s como real
	Definir promedio como real
	
	Escribir "Ingrese el nombre del operario: "
	Leer nombre 
	
	Escribir "Ingrese la produccion del dia lunes: "
	Leer l
	Escribir "Ingrese la produccion del dia martes: "
	Leer m
	Escribir "Ingrese la produccion del dia miercoles: "
	Leer mi
	Escribir "Ingrese la produccion del dia jueves: "
	Leer j
	Escribir "Ingrese la produccion del dia viernes: "
	Leer v
	Escribir "Ingrese la produccion del dia sabado: "
	Leer s
	
	promedio = (l + m + mi + j + v + s) / 6
	
	si promedio >= 100 Entonces
		Escribir "El operario ", nombre, " durante la semana su produccion fue de ", promedio, " unidades y tiene derecho a recibir incentivos."
	SiNo
		Escribir "El operario ", nombre, " durante la semana su produccion fue de ", promedio, " unidades, y no tiene derecho a recibir incentivos."
	FinSi
FinAlgoritmo
