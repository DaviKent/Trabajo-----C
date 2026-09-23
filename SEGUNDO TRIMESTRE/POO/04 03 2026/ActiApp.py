from ActiClases import *
from datetime import datetime as dt, timedelta

# Crear Empresa

miEmpresa = Empresa("Tech Solutions SENA")

print(f"Empresa creada: {miEmpresa.get_nombre()}")
print("*" * 40)

# Crear Contratos

fechaInicio1 = dt.now()
fechaInicio2 = dt.now()

contrato1 = Contrato("Indefinido", fechaInicio1)
contrato2 = Contrato("Temporal", fechaInicio2)

print("Contratos creados:")
print(contrato1.mostrar_contrato())
print(contrato2.mostrar_contrato())
print("*" * 40)

# Crear Empleados

admin1 = Administrativo("Kevin Pérez", 2000000, contrato1)
operativo1 = Operativo("Dailer Gómez", 1500000, contrato2)

print("Empleados creados:")
print(admin1.get_nombre())
print(operativo1.get_nombre())
print("*" * 40)

# Crear Departamento

departamentoTI = Departamento("Tecnología")

departamentoTI.agregar_empleado(admin1)
departamentoTI.agregar_empleado(operativo1)

miEmpresa.agregar_departamento(departamentoTI)

print("Empleados del Departamento Tecnología:")
departamentoTI.mostrar_empleados()
print("*" * 40)

# Mostrar Contratos asociados

print("Información de contratos:")
print(f"{admin1.get_nombre()} - {admin1.get_contrato().mostrar_contrato()}")
print(f"{operativo1.get_nombre()} - {operativo1.get_contrato().mostrar_contrato()}")
print("*" * 40)

# Polimorfismo

print("Cálculo de pagos")
print(f"Pago Administrativo: {admin1.calcular_pago()}")
print(f"Pago Operativo: {operativo1.calcular_pago()}")
print("*" * 40)

# Encapsulamiento

# admin1.__salario = 5000000  No permitido

admin1.set_salario(2500000)

print("Nuevo salario Administrativo:")
print(admin1.calcular_pago())
print("*" * 40)