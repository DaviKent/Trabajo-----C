Algoritmo AdivinarNumero
	
	Definir numSecreto, numUsuario, intentos, maxIntentos Como Entero
	
	numSecreto <- Aleatorio(1,100)
	intentos <- 0
	maxIntentos <- 5
	
	Escribir "Adivina el numero del 1 al 100"
	
	Mientras intentos < maxIntentos Hacer
		Escribir "Intento ", intentos + 1, " de ", maxIntentos
		Escribir "Ingresar numero: "
		Leer numUsuario
		
		intentos <- intentos + 1
		si numUsuario = numSecreto Entonces
			Escribir "Felicidades, lograste adivinar el numero "
			
		SiNo
			si numUsuario < numSecreto Entonces
				Escribir "El numero secreto es MAYOR"
			SiNo
				Escribir "El numero secreto es MENOR"
			FinSi
		FinSi
		
	FinMientras
	Escribir "Se acabaron tus intentos. El numero era: ", numSecreto
	
FinAlgoritmo

