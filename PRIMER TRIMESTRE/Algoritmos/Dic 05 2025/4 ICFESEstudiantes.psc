Algoritmo ICFESEstudiantes
	
    Dimension nombres[10]
    Dimension puntajes[10]
	Definir nombres como cadena
	Definir puntajes Como Entero
    Definir i, mayor, menor, posMayor, posMenor Como Entero
    Definir suma, promedio Como Real
	
    suma = 0
    mayor = -1
    menor = 9999
	
    // Leer datos
    Para i = 0 Hasta 9 Hacer
        Escribir "Ingrese el nombre del estudiante ", i+1, ":"
        Leer nombres[i]
		
        Escribir "Ingrese el puntaje de ", nombres[i], ":"
        Leer puntajes[i]
		
        // Acumular para promedio
        suma = suma + puntajes[i]
		
        // Mayor puntaje
        Si puntajes[i] > mayor Entonces
            mayor = puntajes[i]
            posMayor = i
        FinSi
		
        // Menor puntaje
        Si puntajes[i] < menor Entonces
            menor = puntajes[i]
            posMenor = i
        FinSi
		
    FinPara
	
    // Calcular promedio
    promedio = suma / 10
	
    // Mostrar resultados
    Escribir "====================================="
    Escribir "ESTUDIANTE CON MAYOR PUNTAJE:"
    Escribir "Nombre: ", nombres[posMayor]
    Escribir "Puntaje: ", mayor
	
    Escribir "-------------------------------------"
    Escribir "ESTUDIANTE CON MENOR PUNTAJE:"
    Escribir "Nombre: ", nombres[posMenor]
    Escribir "Puntaje: ", menor
	
    Escribir "-------------------------------------"
    Escribir "Promedio de puntajes: ", promedio
    Escribir "====================================="
	
FinAlgoritmo
