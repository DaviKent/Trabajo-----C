Algoritmo SumaDigitos
	
    Dimension num[10], suma[10]
    Definir i, d1, d2 Como Entero
	Definir num, suma Como Entero
	
    Escribir "Ingrese 10 números enteros de DOS dígitos:"
    
    Para i = 0 Hasta 9 Hacer
        Leer num[i]
		
        // Separar los dígitos
        d1 = Trunc(num[i] / 10)   // decena
        d2 = num[i] Mod 10        // unidad
		
        // Sumar los dígitos
        suma[i] = d1 + d2
    FinPara
	
    // Mostrar arreglo original
    Escribir "=============================="
    Escribir "Arreglo de entrada:"
    Para i = 0 Hasta 9 Hacer 
        Escribir num[i]
    FinPara
	
    // Mostrar arreglo generado
    Escribir "=============================="
    Escribir "Suma de dígitos:"
    Para i = 0 Hasta 9 Hacer
        Escribir suma[i]
    FinPara
	
FinAlgoritmo
