Proceso ConversorMedidas
	
    Definir opcion_general, opcion_sub, valor, resultado Como Real
	
    Repetir
        Escribir "========= CONVERSOR DE MEDIDAS ========="
        Escribir "1. Medidas de masa"
        Escribir "2. Medidas de longitud"
        Escribir "3. Medidas de temperatura"
        Escribir "4. Medidas en bytes"
        Escribir "5. Medidas de tiempo"
        Escribir "6. Salir"
        Escribir "Seleccione una opción:"
        Leer opcion_general
		
        Segun opcion_general Hacer
			
				//------ MASA ------
			1:
				Escribir "--- MEDIDAS DE MASA ---"
				Escribir "1. Gramos a Kilogramos"
				Escribir "2. Kilogramos a Gramos"
				Escribir "3. Libras a Kilogramos"
				Escribir "4. Kilogramos a Libras"
				Leer opcion_sub
				
				Escribir "Ingrese el valor de Masa:"
				Leer valor
				
				Segun opcion_sub Hacer
					1: resultado <- valor / 1000
					2: resultado <- valor * 1000
					3: resultado <- valor * 0.453592
					4: resultado <- valor / 0.453592
				FinSegun
				Escribir "Resultado: ", resultado
				
				//------ LONGITUD ------
			2:
				Escribir "--- MEDIDAS DE LONGITUD ---"
				Escribir "1. Metros a Kilómetros"
				Escribir "2. Kilómetros a Metros"
				Escribir "3. Metros a Centímetros"
				Escribir "4. Centímetros a Metros"
				Leer opcion_sub
				
				Escribir "Ingrese el valor de Longitud:"
				Leer valor
				
				Segun opcion_sub Hacer
					1: resultado <- valor / 1000
					2: resultado <- valor * 1000
					3: resultado <- valor * 100
					4: resultado <- valor / 100
				FinSegun
				Escribir "Resultado: ", resultado
				
				//------ TEMPERATURA ------
			3:
				Escribir "--- MEDIDAS DE TEMPERATURA ---"
				Escribir "1. Celsius a Fahrenheit"
				Escribir "2. Fahrenheit a Celsius"
				Escribir "3. Celsius a Kelvin"
				Escribir "4. Kelvin a Celsius"
				Leer opcion_sub
				
				Escribir "Ingrese el valor de Temperatura:"
				Leer valor
				
				Segun opcion_sub Hacer
					1: resultado <- (valor * 9/5) + 32
					2: resultado <- (valor - 32) * 5/9
					3: resultado <- valor + 273.15
					4: resultado <- valor - 273.15
				FinSegun
				Escribir "Resultado: ", resultado
				
				//------ BYTES ------
			4:
				Escribir "--- MEDIDAS DE BYTES ---"
				Escribir "1. Bytes a Megabytes"
				Escribir "2. Megabytes a Bytes"
				Escribir "3. Megabytes a Gigabytes"
				Escribir "4. Gigabytes a Megabytes"
				Leer opcion_sub
				
				Escribir "Ingrese el valor de Bytes:"
				Leer valor
				
				Segun opcion_sub Hacer
					1: resultado <- valor / 1048576
					2: resultado <- valor * 1048576
					3: resultado <- valor / 1024
					4: resultado <- valor * 1024
				FinSegun
				Escribir "Resultado: ", resultado
				
				//------ TIEMPO ------
			5:
				Escribir "--- MEDIDAS DE TIEMPO ---"
				Escribir "1. Segundos a Minutos"
				Escribir "2. Minutos a Segundos"
				Escribir "3. Minutos a Horas"
				Escribir "4. Horas a Minutos"
				Leer opcion_sub
				
				Escribir "Ingrese el valor de Tiempo:"
				Leer valor
				
				Segun opcion_sub Hacer
					1: resultado <- valor / 60
					2: resultado <- valor * 60
					3: resultado <- valor / 60
					4: resultado <- valor * 60
				FinSegun
				Escribir "Resultado: ", resultado
				
			6: 
				Escribir "Saliendo del programa..."
				
			De Otro Modo:
				Escribir "Opción inválida."
				
        FinSegun
		
        Escribir ""
		
    Hasta Que opcion_general = 6
	
FinProceso