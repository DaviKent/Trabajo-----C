create database pizzeria_yalanda charset utf8;
use pizzeria_yalanda;
drop table pedidos_yalanda;

create table pizzas_yalanda(
idPizza int unsigned auto_increment primary key,
pizNombre varchar(50) not null,
pizIngredientes varchar(50) not null,
pizValor int not null
);

create table clientes_yalanda(
idCliente int unsigned auto_increment primary key,
cliNombre varchar(50) not null,
cliCorreo varchar(50) not null
);

create table pedidos_yalanda(
idPedido int unsigned auto_increment primary key,
pedCantidad int not null,
pedDireccion varchar(150) not null,
petFechaHora datetime not null,
idPizza int unsigned not null,
idCliente int unsigned not null,
foreign key(idPizza) references pizzas_yalanda(idPizza),
foreign key(idCliente) references clientes_yalanda(idCliente)
);

create table facturas_yalanda(
idFactura int unsigned auto_increment primary key,
idPedido int unsigned not null,
facValor int not null
);

alter table clientes_yalanda
add cliTelefono varchar(15) not null
after cliNombre;

alter table facturas_yalanda
change facValor facValorFactura int 
not null;

alter table facturas_yalanda
add facFormaPago enum(
'Efectivo', 'Nequi', 'Transferencia'
);
