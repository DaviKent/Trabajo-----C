SELECT *
FROM producto
WHERE precio >= (SELECT MAX(precio)
    FROM fabricante INNER JOIN producto
    ON fabricante.id = producto.id_fabricante
    WHERE fabricante.nombre = 'Asus');
    
SELECT *
FROM producto
WHERE precio = (
  SELECT MAX(precio)
  FROM producto
  WHERE id_fabricante = (
    SELECT id
    FROM fabricante
    WHERE nombre = 'Asus'));

#uso de all
SELECT *
FROM fabricante INNER JOIN producto
ON fabricante.id = producto.id_fabricante
WHERE precio >= ALL (SELECT precio
    FROM fabricante INNER JOIN producto
    ON fabricante.id = producto.id_fabricante
    WHERE fabricante.nombre = 'Asus');
    
#uso in o not in
SELECT *
FROM cliente
WHERE id NOT IN (SELECT id_cliente FROM pedido);

SELECT id_cliente FROM pedido;

#cuando subconsulta tiene null
SELECT nombre
FROM departamento
WHERE id NOT IN (
  SELECT id_departamento
  FROM empleado
  where id_departamento is not null);
  
#uso de exists y no exists
SELECT *
FROM cliente
WHERE NOT EXISTS 
(SELECT id_cliente FROM pedido 
WHERE cliente.id = pedido.id_cliente);

#subconsultas base de datos tienda
#Devuelve todos los productos de la base de datos que tienen un precio mayor
#o igual al producto más caro del fabricante Lenovo.

select * from producto
where precio >= (
select max(precio) 
from producto 
inner join fabricante
on producto.id_fabricante=fabricante.id
where fabricante.nombre='lenovo'
);

#7. Devuelve el producto más caro que existe en la tabla
#producto sin hacer uso de MAX, ORDER BY ni LIMIT

select * from producto
where precio >=
all (select precio from producto
where precio is not null);

#Devuelve los nombres de los fabricantes que no 
#tienen productos asociados. (Utilizando IN o NOT IN).

select nombre
from fabricante
where id not in 
(select id_fabricante from producto);

#subconsultas ventas
#4. Devuelve la fecha y la cantidad del pedido de menor valor 
#realizado por el cliente Pepe Ruiz Santana.

select fecha, total from pedido
where total <=
(select min(total)from pedido
inner join cliente
on pedido.id_cliente = cliente.id
where cliente.nombre='Pepe'
and cliente.apellido1='Ruiz'
and cliente.apellido2='Santana');

#Devuelve un listado de los clientes que no han realizado
#ningún pedido. (Utilizando EXISTS o NOT EXISTS).

select * from cliente
where not exists 
(select id_cliente from pedido
where pedido.id_cliente=cliente.id);

#universidad
#Devuelve todos los datos del alumno más joven.

select * from persona
where fecha_nacimiento >=
(select max(fecha_nacimiento) from persona
where tipo='alumno');

#4. Devuleve un listado con los profesores que tienen un
#departamento asociado y que no imparten ninguna asignatura

select concat_ws(' ', p.nombre, p.apellido1, p.apellido2) as Profesor, persona as p
inner join profesor
on profesor.id_profesor = p.id
where profesor.id in
(select in_profesor from asignatura)
