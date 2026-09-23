Algoritmo MenuAreas
	
	Definir opcion Como Entero
	Definir lado, base, altura, radio, area Como Real
	
	Escribir "-----MENU DE OPCIONES-----"
	Escribir "1. Area del cuadrado"
	Escribir "2. Area del triangulo"
	Escribir "3. Area del circulo"
	Escribir "4. Salir"
	Escribir "Ingrese opcion: "
	Leer opcion
	
	segun opcion Hacer
		1: 
			Escribir "Ingrese el valor del lado del cuadrado: "
			Leer lado
			area <- lado * lado
			Escribir "El area del cuadrado es: ", area
			
		2:
			Escribir "Ingrese la base del triangulo: "
			Leer base
			Escribir "Ingrese la altura del triangulo: "
			Leer altura
			area <- (base * altura) / 2
			Escribir "El area del triangulo es: ", area
			
		3:
			Escribir "Ingrese el radio del circulo: "
			Leer radio
			area <- pi * radio * radio
			Escribir "El area del circulo es: ", area
			
		4: 
			Escribir "Saliendo del programa..."
		De Otro Modo:
			Escribir "Opcion invalida. Intente nuevamente."
	FinSegun
	
FinAlgoritmo
