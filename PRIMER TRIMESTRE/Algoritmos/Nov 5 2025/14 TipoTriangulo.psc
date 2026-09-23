Algoritmo TipoTriangulo
	
	Definir a, b, c Como Real
	
	Escribir "Ingrese el lado A: "
	Leer a
	Escribir "Ingrese el lado B: "
	Leer b
	Escribir "Ingrese el lado C: "
	
	//validar si los lados forman un triangulo
	si (a + b > c) y (a + c > b) y (b + c > a) Entonces
		//identificar el tipo de triangulo
		si (a = b) y (b = c) Entonces
			Escribir "El triangulo es EQUILATERO"
		SiNo
			si (a = b) o (a = c) o (b =c) Entonces
				Escribir "El triangulo es ISOSCELES"
			SiNo
				Escribir "El triangulo es ESCALENO"
			FinSi
		FinSi
	SiNo
		Escribir "Los valores ingresados NO forman un triangulo."
	FinSi
	
FinAlgoritmo
