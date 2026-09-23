Proceso Aprendices
	
    Dimension nombres[5]
    Dimension estaturas[5]
    Definir op, i, pos_menor Como Entero
    Definir menor, suma, estaturas Como Real
	Definir nombres Como Caracter
	
    Repetir
		
        Escribir "MENU APRENDICES"
		Escribir "Ingrese un numero siendo 1 para leer nombre, y 6 para salir: "
        Escribir "1. Leer nombre de aprendices"
        Escribir "2. Leer estatura de aprendices"
        Escribir "3. Mostrar aprendiz de menor estatura"
        Escribir "4. Mostrar todos los aprendices"
        Escribir "5. Promedio de estaturas"
        Escribir "6. Salir"
        Leer op
		
        Segun op Hacer
			
            1: Para i <- 0 Hasta 4 Hacer
                    Escribir "Ingrese nombre ", i+1, ": "
                    Leer nombres[i]
                FinPara
            2: Para i <- 0 Hasta 4 Hacer
                    Escribir "Ingrese la estatura de ", nombres[i], ": "
                    Leer estaturas[i]
                FinPara
            3: menor <- estaturas[0]
                pos_menor <- 0
                Para i <- 1 Hasta 4 Hacer
                    Si estaturas[i] < menor Entonces
                        menor <- estaturas[i]
                        pos_menor <- i
                    FinSi
                FinPara
                Escribir "Aprendiz más bajo: ", nombres[pos_menor], " con ", menor
            4: Para i <- 0 Hasta 4 Hacer
                    Escribir nombres[i], " mide: ", estaturas[i]
                FinPara
            5: suma <- 0
                Para i <- 0 Hasta 4 Hacer
                    suma <- suma + estaturas[i]
                FinPara
//                Escribir "Promedio de estatura: ", suma / 5
        FinSegun
		
    Hasta Que op = 6
	
FinProceso
