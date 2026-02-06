Algoritmo CitasMedicas
	
    Definir opcion,citas, doc, pos, i Como Entero
    Definir horas Como Caracter
    Dimension horas[8]
    Dimension citas[8]
	
    horas[0] = "7 am"
    horas[1] = "8 am"
    horas[2] = "9 am"
    horas[3] = "10 am"
    horas[4] = "2 pm"
    horas[5] = "3 pm"
    horas[6] = "4 pm"
    horas[7] = "5 pm"
    Para i = 0 Hasta 7 Hacer
        citas[i] = 0
    FinPara
    Repetir
        Escribir ""
        Escribir "======= MENU DE CITAS ======="
        Escribir "1. Asignar cita"
        Escribir "2. Ver todas las citas"
        Escribir "3. Consultar cita por documento"
        Escribir "4. Consultar cita por hora"
        Escribir "5. Salir"
        Leer opcion
        Segun opcion Hacer

            1:
                Escribir "Ingrese el documento:"
                Leer doc
                // Buscar si ya tiene cita
                pos = -1
                i = 0
                Mientras i < 8 Y pos = -1 Hacer
                    Si citas[i] = doc Entonces
                        pos = i
                    FinSi
                    i = i + 1
                FinMientras
                Si pos <> -1 Entonces
                    Escribir "El paciente YA TIENE cita a las ", horas[pos]
                SiNo
                    // Buscar primer espacio libre
                    pos = -1
                    i = 0
                    Mientras i < 8 Y pos = -1 Hacer
                        Si citas[i] = 0 Entonces
                            pos = i
                        FinSi
                        i = i + 1
                    FinMientras
                    Si pos = -1 Entonces
                        Escribir "No hay citas disponibles."
                    SiNo
                        citas[pos] = doc
                        Escribir "Cita asignada correctamente a las ", horas[pos]
                    FinSi
                FinSi
            2:
                Escribir "===== TODAS LAS CITAS ====="
                Para i = 0 Hasta 7 Hacer
                    Si citas[i] = 0 Entonces
                        Escribir horas[i], " - Disponible"
                    SiNo
                        Escribir horas[i], " - Paciente: ", citas[i]
                    FinSi
                FinPara
            3:
                Escribir "Ingrese documento a buscar:"
                Leer doc
                pos = -1
                i = 0
                Mientras i < 8 Y pos = -1 Hacer
                    Si citas[i] = doc Entonces
                        pos = i
                    FinSi
                    i = i + 1
                FinMientras
                Si pos = -1 Entonces
                    Escribir "El paciente NO tiene cita."
                SiNo
                    Escribir "Tiene cita a las ", horas[pos]
                FinSi
            4:
                Escribir "Seleccione la hora:"
                Para i = 0 Hasta 7 Hacer
                    Escribir i+1, ": ", horas[i]
                FinPara
                Leer pos
                pos = pos - 1
                Si pos < 0 O pos > 7 Entonces
                    Escribir "Hora inválida."
                Sino
                    Si citas[pos] = 0 Entonces
                        Escribir "Disponible a las ", horas[pos]
                    SiNo
                        Escribir "Paciente asignado: ", citas[pos]
                    FinSi
                FinSi
            5:
                Escribir "Saliendo..."
            De Otro Modo:
                Escribir "Opción inválida."
        FinSegun
    Hasta Que opcion = 5
FinAlgoritmo
