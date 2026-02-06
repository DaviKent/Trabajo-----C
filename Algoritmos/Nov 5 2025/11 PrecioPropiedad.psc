Algoritmo PrecioPropiedad
	
	Definir area, valorMetro, precioVenta Como Real
	Definir cuotaInicial Como Real
	Definir formaPago Como Entero
	
	Escribir "Ingrese el area de la propiedad: "
	Leer area
	Escribir "Ingrese el valor del metro cuadrado: "
	Leer valorMetro
	Escribir "Ingrese la forma de pago de la cuota inicial (1 o 2): "
	Leer formaPago
	
	precioVenta = area * valorMetro
	cuotaInicial = precioVenta * 0.20
	si formaPago = 1 Entonces
		cuotaInicial = cuotaInicial - (cuotaInicial * 0.08)
	SiNo
		Escribir "Forma de pago invalida."
	FinSi
	
	Escribir "El precio de venta de la propiedad es: $", precioVenta
	Escribir "El valor de la cuota inicial es: $", cuotaInicial
	
FinAlgoritmo
