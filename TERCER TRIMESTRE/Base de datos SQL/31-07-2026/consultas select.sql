DROP DATABASE IF EXISTS instituto;
CREATE DATABASE instituto CHARACTER SET utf8mb4;
USE instituto;

CREATE TABLE alumno (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  fecha_nacimiento DATE NOT NULL,
  es_repetidor ENUM('sí', 'no') NOT NULL,
  teléfono VARCHAR(9)
);

INSERT INTO alumno VALUES(1, 'María', 'Sánchez', 'Pérez', '1990-12-01', 'no', NULL);
INSERT INTO alumno VALUES(2, 'Juan', 'Sáez', 'Vega', '1998-04-02', 'no', 618253876);
INSERT INTO alumno VALUES(3, 'Pepe', 'Ramírez', 'Gea', '1988-01-03', 'no', NULL);
INSERT INTO alumno VALUES(4, 'Lucía', 'Sánchez', 'Ortega', '1993-06-13', 'sí', 678516294);
INSERT INTO alumno VALUES(5, 'Paco', 'Martínez', 'López', '1995-11-24', 'no', 692735409);
INSERT INTO alumno VALUES(6, 'Irene', 'Gutiérrez', 'Sánchez', '1991-03-28', 'sí', NULL);
INSERT INTO alumno VALUES(7, 'Cristina', 'Fernández', 'Ramírez', '1996-09-17', 'no', 628349590);
INSERT INTO alumno VALUES(8, 'Antonio', 'Carretero', 'Ortega', '1994-05-20', 'sí', 612345633);
INSERT INTO alumno VALUES(9, 'Manuel', 'Domínguez', 'Hernández', '1999-07-08', 'no', NULL);
INSERT INTO alumno VALUES(10, 'Daniel', 'Moreno', 'Ruiz', '1998-02-03', 'no', NULL);
insert INTO alumno values(null,"Rosa","Ruiz","Mplano","2001-02-15","si",null);

#  Consulta
# Select * from (table)
SELECT * from alumno;
select nombre from alumno;
select nombre,apellido1,apellido2 as AP2 # esto se llama colocarle un alias 
from alumno;

# Consulta calculada

DROP DATABASE IF EXISTS tienda;
CREATE DATABASE tienda CHARACTER SET utf8mb4;
USE tienda;

CREATE TABLE ventas (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  cantidad_comprada INT UNSIGNED NOT NULL,
  precio_por_elemento DECIMAL(7,2) NOT NULL 
);

INSERT INTO ventas VALUES (1, 2, 1.50);
INSERT INTO ventas VALUES (2, 5, 1.75);
INSERT INTO ventas VALUES (3, 7, 2.00);
INSERT INTO ventas VALUES (4, 9, 3.50);
INSERT INTO ventas VALUES (5, 6, 9.99);

select * from ventas;
select id, cantidad_comprada,precio_por_elemento,
(cantidad_comprada*precio_por_elemento) as "Precio Total" # para hacer una consulta calculada 
from ventas;

DROP DATABASE IF EXISTS company;
CREATE DATABASE company CHARACTER SET utf8mb4;
USE company;

CREATE TABLE offices (
  office INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  city VARCHAR(50) NOT NULL,
  region VARCHAR(50) NOT NULL,
  manager INT UNSIGNED,
  target DECIMAL(9,2) NOT NULL,
  sales DECIMAL(9,2) NOT NULL
);

INSERT INTO offices VALUES (11, 'New York', 'Eastern', 106,  575000, 692637);
INSERT INTO offices VALUES (12, 'Chicago', 'Eastern', 104, 800000, 735042);
INSERT INTO offices VALUES (13, 'Atlanta', 'Eastern', NULL, 350000, 367911);
INSERT INTO offices VALUES (21, 'Los Angeles', 'Western', 108, 725000, 835915);
INSERT INTO offices VALUES (22, 'Denver', 'Western', 108, 300000, 186042);

select * from offices;
select city, region, sales-target as goal
from offices;

use instituto;

select * from alumno;
select concat(nombre,apellido1,apellido2) as nombre_completo, fecha_nacimiento # Concatenar los datos que estan dentro del ()
from alumno;
select concat_ws(" ",nombre,apellido1,apellido2) as nombre_completo, fecha_nacimiento # Concatenar los datos con un separador elegido en este caso es un campo vacio(" ") siempre se pone al inicio de los parentesis
from alumno;
select upper(concat_ws(" ",nombre,apellido1,apellido2)) as nombre_completo, fecha_nacimiento # Upper funcion que convierte los datos a mayuscula
from alumno;
select lower(concat_ws(" ",nombre,apellido1,apellido2)) as nombre_completo, fecha_nacimiento # Lower funcion que convierte los datos a minuscula
from alumno;
select apellido1 from alumno;
select distinct apellido1 from alumno; #No mostrará filas repetidas solo 1 vez 

select apellido1,apellido2,nombre from alumno;
select apellido1,apellido2,nombre from alumno order by apellido1; #Por defecto order by es ascendente
select apellido1,apellido2,nombre from alumno order by apellido1 desc; #order by de forma descendente
select apellido1,apellido2,nombre from alumno order by apellido1,apellido2,nombre; 
select * from alumno;
select * from alumno limit 5;
select * from alumno limit 2,5;
select * from alumno order by apellido1 desc limit 5;
