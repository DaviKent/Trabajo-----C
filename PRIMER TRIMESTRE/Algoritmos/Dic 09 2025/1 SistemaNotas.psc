Algoritmo SistemaNotas
	
    Definir opcion, i Como Entero
	Definir notas Como Entero
	Definir promedios Como Real
	Definir estados Como Cadena
    Dimension notas[5,3]
    Dimension promedios[5]
    Dimension estados[5]
	
    Repetir
        MostrarMenu()
        Leer opcion
        Segun opcion Hacer
            1:
                LeerNotas(notas)
                CalcularResultados(notas, promedios, estados)
            2:
                MostrarResultados(promedios, estados)
            3:
                Escribir "Saliendo del sistema..."
            De Otro Modo:
                Escribir "Opción inválida"
        FinSegun
    Hasta Que opcion = 3
FinAlgoritmo
SubProceso MostrarMenu
    Escribir "============================"
    Escribir "     SISTEMA DE NOTAS"
    Escribir "============================"
    Escribir "1. Ingresar notas"
    Escribir "2. Mostrar resultados"
    Escribir "3. Salir"
    Escribir "Seleccione una opción:"
FinSubProceso
SubProceso LeerNotas(notas)
    Definir i, j Como Entero
	
    Para i = 0 Hasta 4 Hacer
        Escribir "Alumno ", i + 1
        Para j = 0 Hasta 2 Hacer
            Escribir "Ingrese nota ", j + 1, ":"
            Leer notas[i,j]
        FinPara
    FinPara
FinSubProceso

SubProceso CalcularResultados(notas, promedios, estados)
    Definir i Como Entero
	
    Para i = 0 Hasta 4 Hacer
        promedios[i] = CalcularPromedio(notas[i,0], notas[i,1], notas[i,2])
        estados[i] = Estado(promedios[i])
    FinPara
FinSubProceso

Funcion p = CalcularPromedio(n1, n2, n3)
    Definir p Como Real
    p = (n1 + n2 + n3) / 3
FinFuncion

Funcion e = Estado(prom)
    Definir e Como Caracter
    Si prom >= 3 Entonces
        e = "GANA"
    SiNo
        e = "PIERDE"
    FinSi
FinFuncion

SubProceso MostrarResultados(promedios, estados)
    Definir i Como Entero
	
    Escribir "======= RESULTADOS ======="
    Para i = 0 Hasta 4 Hacer
        Escribir "Alumno ", i + 1
        Escribir "Promedio: ", promedios[i]
        Escribir "Estado: ", estados[i]
        Escribir "-------------------------"
    FinPara
FinSubProceso
