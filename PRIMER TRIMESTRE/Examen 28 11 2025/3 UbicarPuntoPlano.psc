Algoritmo UbicarPunto
	
	Definir x, yy Como Real
	
	Escribir "Ingrese el valor de x: "
	Leer x
	Escribir "Ingrese el valor de y: "
	Leer yy
	
	//verificar si esta en el origen
	si x = 0 Y yy = 0 Entonces
		Escribir "El punto (", x, ",", yy, ") esta en el origen "
		//verificar si esta en los ejes
	SiNo
		si x = 0 Entonces
			Escribir "El punto (", x, ",", yy, ") esta sobre el eje Y"
		FinSi
	FinSi
	si yy = 0 Entonces
		Escribir "El punto (", x, ",", yy, ") esta sobre el eje X"
	SiNo
		Si x > 0 Y yy > 0 Entonces
			Escribir "El punto (", x, ",", yy, ") esta en el PRIMER cuadrante"
		FinSi
	FinSi
	si x < 0 Y yy > 0 Entonces
		Escribir "El punto (", x, ",", yy, ") esta en el SEGUNDO cuadrante"
		Escribir "Su eje es X"
	SiNo
		si x < 0 Y yy < 0 Entonces
			Escribir "El punto (", x, ",", yy, ") esta en el TERCER cuadrante"
		FinSi
	FinSi
	si x > 0 Y yy < 0 Entonces
		Escribir "El punto (", x, ",", yy, ") esta en el CUARTO cuadrante"
	FinSi
	
FinAlgoritmo
