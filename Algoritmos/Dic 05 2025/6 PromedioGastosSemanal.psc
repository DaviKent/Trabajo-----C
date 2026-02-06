Algoritmo PromedioGastosSemanal
	
    Dimension gastos[7]
	Definir gastos Como Real
    Definir i Como Entero
    Definir suma, promedio Como Real
    suma = 0
    Escribir "INGRESE SUS GASTOS DIARIOS DE LA SEMANA"
    Para i = 0 Hasta 6 Hacer
        Escribir "Gasto del día ", i+1, ":"
        Leer gastos[i]
        suma = suma + gastos[i]
    FinPara
    promedio = suma / 7
    Escribir "=============================="
    Escribir "Promedio semanal de gastos: ", promedio
    Escribir "=============================="
	
FinAlgoritmo
