Algoritmo Porcentaje_mujeres_hombres
	
	Definir hombres, mujeres, total Como Entero
	Definir porcentaje_hombres, porcentaje_mujeres Como Real
	
	Escribir "Ingrese la cantidad de hombres en el curso: "
	Leer hombres
	
	Escribir "Ingrese la cantidad de mujeres en el curso: "
	Leer mujeres
	total <- hombres + mujeres 
	
	porcentaje_hombres <- trunc (hombres * 100) / total
	porcentaje_mujeres <- trunc (mujeres * 100) / total
	
	Escribir "El porcentaje de hombres es: ", porcentaje_hombres, "%"
	Escribir "El porcentaje de mujeres es: ", porcentaje_mujeres, "%"
	
FinAlgoritmo
