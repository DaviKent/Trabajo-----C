DROP DATABASE IF EXISTS tienda;
CREATE DATABASE tienda CHARACTER SET utf8mb4;
USE tienda;

CREATE TABLE fabricante (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE producto (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DOUBLE NOT NULL,
  id_fabricante INT UNSIGNED NOT NULL,
  FOREIGN KEY (id_fabricante) REFERENCES fabricante(id)
);

INSERT INTO fabricante VALUES(1, 'Asus');
INSERT INTO fabricante VALUES(2, 'Lenovo');
INSERT INTO fabricante VALUES(3, 'Hewlett-Packard');
INSERT INTO fabricante VALUES(4, 'Samsung');
INSERT INTO fabricante VALUES(5, 'Seagate');
INSERT INTO fabricante VALUES(6, 'Crucial');
INSERT INTO fabricante VALUES(7, 'Gigabyte');
INSERT INTO fabricante VALUES(8, 'Huawei');
INSERT INTO fabricante VALUES(9, 'Xiaomi');

INSERT INTO producto VALUES(1, 'Disco duro SATA3 1TB', 86.99, 5);
INSERT INTO producto VALUES(2, 'Memoria RAM DDR4 8GB', 120, 6);
INSERT INTO producto VALUES(3, 'Disco SSD 1 TB', 150.99, 4);
INSERT INTO producto VALUES(4, 'GeForce GTX 1050Ti', 185, 7);
INSERT INTO producto VALUES(5, 'GeForce GTX 1080 Xtreme', 755, 6);
INSERT INTO producto VALUES(6, 'Monitor 24 LED Full HD', 202, 1);
INSERT INTO producto VALUES(7, 'Monitor 27 LED Full HD', 245.99, 1);
INSERT INTO producto VALUES(8, 'Portátil Yoga 520', 559, 2);
INSERT INTO producto VALUES(9, 'Portátil Ideapd 320', 444, 2);
INSERT INTO producto VALUES(10, 'Impresora HP Deskjet 3720', 59.99, 3);
INSERT INTO producto VALUES(11, 'Impresora HP Laserjet Pro M26nw', 180, 3);

select * from producto;

# lista los nombres y precios de todos los productos de la tabla producto
select nombre,precio from producto;

#Lista el nombre de los productos, el precio en euros y el precio en dólares estadounidenses (USD).
select nombre,concat(precio,"US") as precioDolar,
concat(precio,"EU") as precioEuro from producto;

#Lista el nombre de los productos, el precio en euros y el precio en dólares estadounidenses (USD). Utiliza los siguientes alias para las columnas: nombre de producto, euros, dólares.
select nombre as "Nombre de producto ", concat(precio,"US") as Dolares,
concat(precio,"EU") as Euros from producto;

#Lista el identificador de los fabricantes que tienen productos en la tabla producto, eliminando los identificadores que aparecen repetidos.
select distinct(id_fabricante) from producto;

# Devuelve una lista con las 5 primaras filas de la tabla fabricante
select * from fabricante limit 5;

# Lista el nombre y el precio del producto más caro. (Utilice solamente las cláusulas ORDER BY y LIMIT)
select nombre,precio from producto
order by precio desc
limit 1;

# Lista todos los productos que tengan un precio entre 80€ y 300€. Sin utilizar el operador BETWEEN
select * from producto
where(precio>=80) and (precio<=300);
# con between
select * from producto
where precio between 80 and 300;

# Lista los nombres de los fabricantes cuyo nombre termine por la vocal e.
select nombre from fabricante
where nombre like '%e';

# Devuelve una lista con el nombre de todos los productos que contienen la cadena Monitor en el nombre y tienen un precio inferior a 215 €.
select nombre,precio from producto
where nombre like '%Monitor%' and precio<215;

# Lista todos los productos donde el identificador de fabricante sea 1, 3 o 5. Utilizando el operador IN.
select * from producto
where id_fabricante in (1,3,5);

# Lista todos los productos donde el identificador de fabricante sea 1, 3 o 5. Sin utilizar el operador IN.
select * from producto
where id_fabricante=1 or id_fabricante=3 or id_fabricante=5;





# Lista el primer apellido de todos los empleados.
select apellido1 from empleado;

# Lista el primer apellido de los empleados eliminando los apellidos que estén repetidos.
select distinct(apellido1) from empleado;

# Lista todas las columnas de la tabla empleado.






