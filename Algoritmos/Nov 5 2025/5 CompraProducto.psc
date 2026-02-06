Algoritmo CompraProducto
	
	Definir nombreProducto como cadena
	Definir precio, cantidad, total, descuento, neto Como Real
	
	Escribir "Ingrese el nombre del producto: "
	Leer nombreProducto
	
	Escribir "Ingrese el precio del producto: "
	Leer precio
	
	Escribir "Ingrese la cantidad comprada: "
	Leer cantidad
	
	total = precio * cantidad
	//determinar descuento segun cantidad
	si cantidad > 3 Entonces
		descuento = total * 0.20
	SiNo
		si cantidad = 2 Entonces
			descuento = total * 0.10
		SiNo
			si cantidad = 1 Entonces
				descuento = total * 0.05
			sino 
				descuento = 0
			FinSi
		FinSi
	FinSi
	
	neto = total - descuento
	//mostrar resultados
	Escribir "_______________________________________________"
	Escribir "Nombre del producto: ", nombreProducto
	Escribir "Precio del producto: $", precio
	Escribir "Cantidad comprada: ", cantidad
	Escribir "Valor total: $", total
	Escribir "Descuento: $", descuento
	Escribir "Valor neto a pagar: $", neto
	Escribir "________________________________________________"
	
FinAlgoritmo
