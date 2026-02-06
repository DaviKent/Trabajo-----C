Algoritmo PaisesLetras
	
    Dimension pais[5]
    Dimension letras[5]
	Definir pais Como Caracter
	Definir letras Como Entero
    Definir i Como Entero
	
    // Leer los nombres de los países
    Escribir "Ingrese 5 países:"
    Para i = 0 Hasta 4 Hacer
        Leer pais[i]
    FinPara
	
    // Generar arreglo con cantidad de letras
    Para i = 0 Hasta 4 Hacer
        letras[i] = Longitud(pais[i])
    FinPara
	
    // Mostrar arreglo de entrada
    Escribir "==============================="
    Escribir "Arreglo de países ingresados:"
    Para i = 0 Hasta 4 Hacer
        Escribir pais[i]
    FinPara
	
    // Mostrar arreglo generado
    Escribir "==============================="
    Escribir "Cantidad de letras por país:"
    Para i = 0 Hasta 4 Hacer
        Escribir letras[i]
	
    FinPara
	
FinAlgoritmo
