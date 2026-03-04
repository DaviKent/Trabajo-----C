# Clase Contrato

class Contrato:
    def __init__(self, tipo, fecha_inicio):
        self.__tipo = tipo
        self.__fecha_inicio = fecha_inicio

    def get_tipo(self):
        return self.__tipo

    def set_tipo(self, tipo):
        self.__tipo = tipo

    def mostrar_contrato(self):
        return f"Contrato tipo {self.__tipo}, inicia el {self.__fecha_inicio}"

# Clase Empleado (Superclase)

class Empleado:
    def __init__(self, nombre, salario, contrato):
        self.__nombre = nombre
        self.__salario = salario
        self.__contrato = contrato

    def get_nombre(self):
        return self.__nombre

    def get_salario(self):
        return self.__salario

    def set_salario(self, salario):
        self.__salario = salario

    def calcular_pago(self):
        return self.__salario
    
    def get_contrato(self):
        return self.__contrato

# Herencia - Administrativo

class Administrativo(Empleado):
    def calcular_pago(self):
        # Bono del 10%
        return self.get_salario() * 1.10

# Herencia - Operativo

class Operativo(Empleado):
    def calcular_pago(self):
        # Bono del 5%
        return self.get_salario() * 1.05

# Clase Departamento (Composición)

class Departamento:
    def __init__(self, nombre):
        self.__nombre = nombre
        self.__empleados = []

    def agregar_empleado(self, empleado):
        self.__empleados.append(empleado)

    def mostrar_empleados(self):
        for e in self.__empleados:
            print(e.get_nombre())

# Clase Empresa (Agregación)

class Empresa:
    
    def __init__(self, nombre):
        self.__nombre = nombre
        self.__departamentos = []

    def agregar_departamento(self, departamento):
        self.__departamentos.append(departamento)

    def get_nombre(self):
        return self.__nombre