Algoritmo ConjuntoResidencial
	
    Definir opcion,conjunto, torre, piso, apto, i, j, k Como Entero
    Definir habitantes Como Entero
	
    // Matriz 3D: [torre][piso][apartamento]
    Dimension conjunto[3,5,4]
	
    // Inicializar todo en cero
    Para i = 0 Hasta 2 Hacer
        Para j = 0 Hasta 4 Hacer
            Para k = 0 Hasta 3 Hacer
                conjunto[i,j,k] = 0
            FinPara
        FinPara
    FinPara
    Repetir
        Escribir ""
        Escribir "----- MENU CONJUNTO RESIDENCIAL -----"
        Escribir "1. Agregar habitantes (aleatorio)"
        Escribir "2. Consultar habitantes por apartamento"
        Escribir "3. Total de habitantes del conjunto"
        Escribir "4. Promedio de habitantes por piso (cada torre)"
        Escribir "5. Promedio de habitantes por torre"
        Escribir "6. Salir"
        Escribir "Seleccione una opción:"
        Leer opcion
		
        Segun opcion Hacer
				// 1. AGREGAR HABITANTES ALEATORIOS
            1:
                Para i = 0 Hasta 2 Hacer
                    Para j = 0 Hasta 4 Hacer
                        Para k = 0 Hasta 3 Hacer
                            conjunto[i,j,k] = Aleatorio(1,5)
                        FinPara
                    FinPara
                FinPara
                Escribir "Habitantes generados correctamente."
				
				// 2. CONSULTAR HABITANTES POR APARTAMENTO
            2:
                Escribir "Ingrese torre (1-3):"
                Leer torre
                Escribir "Ingrese piso (1-5):"
                Leer piso
                Escribir "Ingrese apartamento (1-4):"
                Leer apto
				
                torre = torre - 1
                piso = piso - 1
                apto = apto - 1
				
                Si torre < 0 O torre > 2 O piso < 0 O piso > 4 O apto < 0 O apto > 3 Entonces
                    Escribir "Datos inválidos."
                SiNo
                    Escribir "Habitantes en esa vivienda: ", conjunto[torre,piso,apto]
                FinSi
				// 3. TOTAL HABITANTES DEL CONJUNTO
            3:
                habitantes = 0
                Para i = 0 Hasta 2 Hacer
                    Para j = 0 Hasta 4 Hacer
                        Para k = 0 Hasta 3 Hacer
                            habitantes = habitantes + conjunto[i,j,k]
                        FinPara
                    FinPara
                FinPara
                Escribir "Total de habitantes del conjunto: ", habitantes
				// 4. PROMEDIO POR PISO DE CADA TORRE
            4:
                Para i = 0 Hasta 2 Hacer
                    Escribir "TORRE ", i+1
                    Para j = 0 Hasta 4 Hacer
                        habitantes = 0
                        Para k = 0 Hasta 3 Hacer
                            habitantes = habitantes + conjunto[i,j,k]
                        FinPara
                        Escribir "  Piso ", j+1, ": Promedio = ", habitantes/4
                    FinPara
                FinPara
				// 5. PROMEDIO DE HABITANTES POR TORRE
            5:
                Para i = 0 Hasta 2 Hacer
                    habitantes = 0
                    Para j = 0 Hasta 4 Hacer
                        Para k = 0 Hasta 3 Hacer
                            habitantes = habitantes + conjunto[i,j,k]
                        FinPara
                    FinPara
                    Escribir "Promedio Torre ", i+1, ": ", habitantes / 20
                FinPara
				// 6. SALIR
            6:
                Escribir "Saliendo..."
            De Otro Modo:
                Escribir "Opción inválida."
        FinSegun
		
    Hasta Que opcion = 6
	
FinAlgoritmo
