Algoritmo MatrizParImpar
	
    Definir M, N, i, j Como Entero
    Definir matriz Como Entero
	Definir matrizPI Como Caracter
	
    // Leer dimensiones
    Escribir "Ingrese el número de filas (M): "
    Leer M
    Escribir "Ingrese el número de columnas (N): "
    Leer N
	
    // Declarar matrices
    Dimension matriz[M, N]
    Dimension matrizPI[M, N]
	
    // Leer la matriz principal
    Para i = 0 Hasta M-1 Hacer
        Para j = 0 Hasta N-1 Hacer
            Escribir "Ingrese el valor para la posición [", i, ",", j, "]: "
            Leer matriz[i, j]
        FinPara
    FinPara
	
    // Construir matriz P/I
    Para i = 0 Hasta M-1 Hacer
        Para j = 0 Hasta N-1 Hacer
            Si matriz[i, j] mod 2 = 0 Entonces
                matrizPI[i, j] = "P"
            Sino
                matrizPI[i, j] = "I"
            FinSi
        FinPara
    FinPara
	
    // Mostrar matriz original
    Escribir ""
    Escribir "===== MATRIZ ORIGINAL ====="
    Para i = 0 Hasta M-1 Hacer
        Para j = 0 Hasta N-1 Hacer
            Escribir matriz[i, j], "  " Sin Saltar
        FinPara
        Escribir ""
    FinPara
	
    // Mostrar matriz P/I
    Escribir ""
    Escribir "===== MATRIZ PAR / IMPAR ====="
    Para i = 0 Hasta M-1 Hacer
        Para j = 0 Hasta N-1 Hacer
            Escribir matrizPI[i, j], "  " Sin Saltar
        FinPara
        Escribir ""
    FinPara
	
FinAlgoritmo
