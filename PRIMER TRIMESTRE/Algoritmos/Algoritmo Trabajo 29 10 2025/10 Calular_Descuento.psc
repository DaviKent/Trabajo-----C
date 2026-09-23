Algoritmo Calular_Descuento
	
	Definir total_compra, descuento, total_pagar Como Real
	Escribir "Ingrese el total de la compra: "
	Leer total_compra
	
	descuento <- trunc (total_compra * 0.15)
	total_pagar <- trunc (total_compra - descuento)
	
	Escribir "El descuento aplicado es: $", descuento
	Escribir "El total a pagar despues del descuento es: $", total_pagar
	
FinAlgoritmo
