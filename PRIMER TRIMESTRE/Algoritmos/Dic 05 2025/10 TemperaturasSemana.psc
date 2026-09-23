Algoritmo TemperaturasSemana
	
    Definir i, opcion, diaBuscar, mayorTemp, diaMayor Como Entero
    Definir dias Como Cadena
	Definir temp Como Entero
    Dimension dias[7]
    Dimension temp[7,2]   // Columna 0 = mínima, Columna 1 = máxima
	
    // Nombres de los días
    dias[0] = "Lunes"
    dias[1] = "Martes"
    dias[2] = "Miércoles"
    dias[3] = "Jueves"
    dias[4] = "Viernes"
    dias[5] = "Sábado"
    dias[6] = "Domingo"
	
    // Leer temperaturas
    Escribir "=== REGISTRO DE TEMPERATURAS DE POPAYÁN ==="
    Para i = 0 Hasta 6 Hacer
        Escribir "Ingrese temperatura mínima del día ", dias[i], ":"
        Leer temp[i,0]
		
        Escribir "Ingrese temperatura máxima del día ", dias[i], ":"
        Leer temp[i,1]
    FinPara
	
    Repetir
        
        Escribir ""
        Escribir "=========== MENÚ =========="
        Escribir "1. Consultar día con mayor temperatura máxima"
        Escribir "2. Consultar temperaturas de un día específico"
        Escribir "3. Salir"
        Escribir "Seleccione una opción:"
        Leer opcion
		
        Segun opcion Hacer
			
            1:
                // Encontrar la mayor temperatura máxima
                mayorTemp = temp[0,1]
                diaMayor = 0
				
                Para i = 1 Hasta 6 Hacer
                    Si temp[i,1] > mayorTemp Entonces
                        mayorTemp = temp[i,1]
                        diaMayor = i
                    FinSi
                FinPara
				
                Escribir "El día ", dias[diaMayor], " la temperatura máxima fue de ", mayorTemp, " grados."
				
            2:
                Escribir "Ingrese el número del día que desea consultar:"
                Escribir "1 = Lunes  2 = Martes  3 = Miércoles  4 = Jueves  5 = Viernes  6 = Sábado  7 = Domingo"
                Leer diaBuscar
				
                Si diaBuscar < 1 O diaBuscar > 7 Entonces
                    Escribir "Día inválido."
                Sino
                    diaBuscar = diaBuscar - 1
                    Escribir "Día: ", dias[diaBuscar]
                    Escribir "Temperatura mínima: ", temp[diaBuscar,0], " grados"
                    Escribir "Temperatura máxima: ", temp[diaBuscar,1], " grados"
                FinSi
				
            3:
                Escribir "Saliendo del programa..."
				
            De Otro Modo:
                Escribir "Opción inválida."
        FinSegun
		
    Hasta Que opcion = 3

FinAlgoritmo
