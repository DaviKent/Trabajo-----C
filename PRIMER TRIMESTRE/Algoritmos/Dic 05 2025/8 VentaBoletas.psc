Algoritmo VentaBoletas
	
    Definir opcion, i, totalVendidas, cantComprar Como Entero
    Definir cedula Como Entero
    Definir existe Como Logico
    Dimension cedulas[25]   // Capacidad para 25 compradores
    totalVendidas = 0
    Definir boletasDisponibles, cedulas Como Entero
    boletasDisponibles = 15  
    Para i = 0 Hasta 24 Hacer
        cedulas[i] = 0
    FinPara
    Repetir
        Escribir "=============================="
        Escribir "      SISTEMA DE BOLETAS"
        Escribir "Boletas disponibles: ", boletasDisponibles
        Escribir "1. Comprar boleta"
        Escribir "2. Mostrar compradores"
        Escribir "3. Salir"
        Escribir "Seleccione una opción:"
        Leer opcion
        Segun opcion Hacer
			
            1:
                Si boletasDisponibles = 0 Entonces
                    Escribir "NO HAY MÁS BOLETAS DISPONIBLES."
                SiNo
                    Escribir "Ingrese número de cédula:"
                    Leer cedula
					
                    // Verificar si ya existe
                    existe = Falso
                    Para i = 0 Hasta totalVendidas Hacer
                        Si cedulas[i] = cedula Entonces
                            existe = Verdadero
                        FinSi
                    FinPara
					
                    Si existe Entonces
                        Escribir "VENTA RECHAZADA: Esta cédula ya compró boleta."
                    SiNo
                        Escribir "¿Cuántas boletas desea comprar? (máximo 4)"
                        Leer cantComprar
						
                        Si cantComprar > 4 Entonces
                            Escribir "ERROR: No puede comprar más de 4."
                        SiNo
                            Si cantComprar > boletasDisponibles Entonces
                                Escribir "ERROR: Solo quedan ", boletasDisponibles, " boletas."
                            SiNo
                                // Registrar compra
                                totalVendidas = totalVendidas + 1
                                cedulas[totalVendidas] = cedula
								
                                boletasDisponibles = boletasDisponibles - cantComprar
								
                                Escribir "COMPRA EXITOSA."
                                Escribir "Cédula registrada: ", cedula
                                Escribir "Boletas compradas: ", cantComprar
                            FinSi
                        FinSi
                    FinSi
                FinSi
            2:
                Escribir "=== LISTA DE COMPRADORES ==="
                Si totalVendidas = 0 Entonces
                    Escribir "No hay compradores aún."
                SiNo
                    Para i = 1 Hasta totalVendidas Hacer
                        Escribir i, ". Cédula: ", cedulas[i]
                    FinPara
                FinSi
            3:
                Escribir "Saliendo del sistema..."
				
            De Otro Modo:
                Escribir "Opción inválida."
				
        FinSegun
    Hasta Que opcion = 3 O boletasDisponibles = 0
    Si boletasDisponibles = 0 Entonces
        Escribir "=============================="
        Escribir "VENTA FINALIZADA ? No quedan boletas"
        Escribir "=============================="
    FinSi

FinAlgoritmo
