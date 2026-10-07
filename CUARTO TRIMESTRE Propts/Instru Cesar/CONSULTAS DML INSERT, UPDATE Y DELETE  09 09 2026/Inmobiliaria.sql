# 1. crear la base de datos y las tablas
create database inmobiliaria;
use inmobiliaria;

create table propietarios (
    idpropietario int primary key auto_increment,
    nombrecompleto varchar(100),
    direccion varchar(100),
    telefono varchar(20)
);

create table arrendatarios (
    idarrendatario int primary key auto_increment,
    nombrecompleto varchar(100),
    correo varchar(100),
    telefono varchar(20)
);

create table casas (
    idcasa int primary key auto_increment,
    direccion varchar(100),
    ciudad varchar(50),
    estrato int,
    numerohabitaciones int,
    numerobanos int,
    area decimal(10,2),
    idpropietario int,
    foreign key (idpropietario) references propietarios(idpropietario)
);

create table arriendos (
    idarriendo int primary key auto_increment,
    idcasa int,
    idarrendatario int,
    valordelarriendo decimal(12,2),
    fechainicialarriendo date,
    foreign key (idcasa) references casas(idcasa),
    foreign key (idarrendatario) references arrendatarios(idarrendatario)
);

# 2. insertar 3 propietarios
insert into propietarios (nombrecompleto, direccion, telefono)
values
('juan carlos rodríguez', 'calle 10 # 15-20', '3001234567'),
('ana maría gómez', 'carrera 20 # 30-15', '3012345678'),
('pedro lópez martínez', 'calle 25 # 40-10', '3023456789');

# consultar todos los propietarios
select * from propietarios;

# 3. insertar una casa para cada propietario
insert into casas (direccion, ciudad, estrato, numerohabitaciones, numerobanos, area, idpropietario)
values
('calle 12 # 20-30', 'bogotá', 4, 3, 2, 85.50, 1),
('carrera 25 # 35-40', 'medellín', 5, 4, 3, 120.00, 2),
('calle 40 # 50-25', 'cali', 3, 2, 2, 70.00, 3);

# consultar todas las casas
select * from casas;

# 4. insertar 3 arrendatarios
insert into arrendatarios (nombrecompleto, correo, telefono)
values
('carlos andrés pérez', 'carlos@gmail.com', '3101234567'),
('maría fernanda torres', 'maria@gmail.com', '3112345678'),
('andrés felipe castro', 'andres@gmail.com', '3123456789');

# consultar todos los arrendatarios
select * from arrendatarios;

# 5. insertar un arriendo con fecha 2025-04-01
insert into arriendos (idcasa, idarrendatario, valordelarriendo, fechainicialarriendo)
values
(1, 1, 1200000, '2025-04-01');

# 6. insertar un arriendo con fecha 2026-08-15
insert into arriendos (idcasa, idarrendatario, valordelarriendo, fechainicialarriendo)
values
(2, 2, 1800000, '2026-08-15');

# consultar todos los arriendos
select * from arriendos;

# 7. actualizar el primer propietario
update propietarios
set nombrecompleto = 'marcos cepeda rico'
where idpropietario = 1;

# consultar el propietario marcos cepeda rico
select * from propietarios
where idpropietario = 1;

# 8. actualizar el estrato de todas las casas a 3
update casas
set estrato = 3
where idcasa > 0;

# consultar todas las casas
select * from casas;

# 9. consultar dirección, estrato y valor del arriendo
select
casas.direccion,
casas.estrato,
arriendos.valordelarriendo
from casas
inner join arriendos
on casas.idcasa = arriendos.idcasa;

# 10. actualizar la fecha 2025-04-01 a 2026-09-01
update arriendos
set fechainicialarriendo = '2026-09-01'
where idarriendo = 1;

# 11. insertar 15 arriendos
insert into arriendos (idcasa, idarrendatario, valordelarriendo, fechainicialarriendo)
values
(1, 2, 1250000, '2025-01-15'),
(2, 3, 1800000, '2025-02-20'),
(3, 1, 950000, '2025-03-10'),
(1, 3, 1300000, '2025-05-05'),
(2, 1, 1850000, '2025-06-18'),
(3, 2, 1000000, '2025-07-25'),
(1, 2, 1350000, '2025-09-12'),
(2, 3, 1900000, '2025-11-03'),
(3, 1, 1050000, '2025-12-15'),
(1, 3, 1400000, '2026-01-20'),
(2, 1, 1950000, '2026-03-05'),
(3, 2, 1100000, '2026-05-14'),
(1, 2, 1450000, '2026-06-22'),
(2, 3, 2000000, '2026-08-15'),
(3, 1, 1150000, '2026-09-01');

# 12. consultar los arriendos del año 2025
select *
from arriendos
where fechainicialarriendo between '2025-01-01' and '2025-12-31';

# 13. aumentar 5,2% los arriendos del año 2025
update arriendos
set valordelarriendo = valordelarriendo * 1.052
where idarriendo > 0
and fechainicialarriendo between '2025-01-01' and '2025-12-31';

# 14. eliminar los arriendos de las casas con estrato 5
delete from arriendos
where idcasa in (
    select idcasa
    from casas
    where estrato = 5
);

# 15. consulta final
select
propietarios.nombrecompleto as propietario,
arrendatarios.nombrecompleto as arrendatario,
casas.direccion,
casas.ciudad,
casas.estrato,
arriendos.fechainicialarriendo
from arriendos
inner join casas
on arriendos.idcasa = casas.idcasa
inner join propietarios
on casas.idpropietario = propietarios.idpropietario
inner join arrendatarios
on arriendos.idarrendatario = arrendatarios.idarrendatario;