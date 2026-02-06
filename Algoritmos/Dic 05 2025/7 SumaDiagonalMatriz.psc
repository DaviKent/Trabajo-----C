Algoritmo SumaDiagonalPrincipal
    
    Definir N, i, j,matriz, suma Como Entero
	
    Escribir "Ingrese el tamaño de la matriz (N): "
    Leer N
	
    Dimension matriz[N,N]
	
    // Leer la matriz
    Para i = 0 Hasta N-1 Hacer
        Para j = 0 Hasta N-1 Hacer
            Escribir "Ingrese el valor para la posición [", i, ",", j, "]: "
            Leer matriz[i,j]
        FinPara
    FinPara
	
    // Sumar diagonal principal
    suma = 0
    Para i = 0 Hasta N-1 Hacer
        suma = suma + matriz[i,i]
    FinPara
	
    Escribir "La suma de la diagonal principal es: ", suma
	
FinAlgoritmo
