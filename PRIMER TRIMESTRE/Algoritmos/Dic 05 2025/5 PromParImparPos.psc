Algoritmo PromParImparPos
	
	Dimension nums[10]
	Definir nums Como Entero
    Definir i Como Entero
    Definir sumaPares, sumaImpares, contPares, contImpares Como Entero
    Definir sumaPosPares, sumaPosImpares Como Entero
    Definir promPares, promImpares Como Real
	
    sumaPares = 0
    sumaImpares = 0
    contPares = 0
    contImpares = 0
    sumaPosPares = 0
    sumaPosImpares = 0
    // Leer los 10 números
    Para i = 0 Hasta 9 Hacer
        Escribir "Ingrese un número para seguir ", i+1, ":"
        Leer nums[i]
        // Clasificar par / impar
        Si nums[i] Mod 2 = 0 Entonces
            sumaPares = sumaPares + nums[i]
            contPares = contPares + 1
        SiNo
            sumaImpares = sumaImpares + nums[i]
            contImpares = contImpares + 1
        FinSi
        // Sumar por posición (posiciones pares e impares)
        Si i Mod 2 = 0 Entonces
            sumaPosPares = sumaPosPares + nums[i]
        SiNo
            sumaPosImpares = sumaPosImpares + nums[i]
        FinSi
    FinPara
    // Calcular promedios
    Si contPares > 0 Entonces
        promPares = sumaPares / contPares
    SiNo
        promPares = 0
    FinSi
    Si contImpares > 0 Entonces
        promImpares = sumaImpares / contImpares
    SiNo
        promImpares = 0
    FinSi
    // Mostrar resultados
    Escribir "====================================="
    Escribir "Promedio de números pares: ", promPares
    Escribir "Promedio de números impares: ", promImpares
    Escribir "-------------------------------------"
    Escribir "Suma de elementos en posiciones pares: ", sumaPosPares
    Escribir "Suma de elementos en posiciones impares: ", sumaPosImpares
    Escribir "====================================="
	
FinAlgoritmo
