import csv

def crearArcivo():
    with open("estudiantes.csv","+a",newline="",encoding="utf-8") as archivo:
        datos=["nombre","edad","sexo","programa","promedio"]
        escritor = csv.writer(archivo)
        escritor.writerow(datos)
    
        pass

def addEstudiantes():
    estudiantes=[
        ["Maria",22,"Femenino","ADSO",4.2],
        ["Pedro",21,"Masculino","ADSO",4.1],
        ["Monik",19,"Femenino","SISTEMAS",3.7],
        ["Juan",24,"Masculino","SISTEMAS",4.2]
    ]
    with open("estudiantes.csv","+a",newline="",encoding="utf-8") as archivo:
        escritor = csv.writer(archivo)
        escritor.writerows(estudiantes)

def mostrarEstudiantes():
    with open("estudiantes.csv","+a",newline="",encoding="utf-8") as archivo:
        lector = csv.reader(archivo)
        
        i=0
        print("Lista de estudiantes")
        for estudiante in lector:
            if i!=0:
                print(estudiante)
            i +=1

def calcularPromedioGeneral():
     with open("estudiantes.csv","r",newline="",encoding="utf-8") as archivo:
        lector = csv.reader(archivo)
        
        i=0
        suma=0
        contador = 0
        print("Lista de estudiantes")
        for estudiante in lector:
            if i!=0:
                suma = suma + float(estudiante[4])
                contador +=1
            i +=1
            
        promedio = suma/contador
        print(f"El promedio general del grupo es: {promedio}")
def mostrarEstudiantesCondicion():
    pass
    
#crearArcivo()
#addEstudiantes()
#mostrarEstudiantes()
calcularPromedioGeneral()