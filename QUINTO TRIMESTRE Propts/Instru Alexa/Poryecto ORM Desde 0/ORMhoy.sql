create database defaultdb;
use defaultdb;

create table juegos (
	id int primary key auto_increment,
    nombre varchar(100) not null,
	precio int
);

create table personajes (
	id int primary key auto_increment,
    nombre varchar(100) not null,
    id_juego int,
    foreign key (id_juego) references juegos(id)
);

select * from juegos;

select * from personajes;

drop database defaultdb;