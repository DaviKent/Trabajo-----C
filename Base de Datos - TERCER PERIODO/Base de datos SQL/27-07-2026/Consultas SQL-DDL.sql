create database instituto charset utf8mb4;

use instituto;

create table alumnos(
id int unique auto_increment primary key,
identificacion int not null unique,
nombres varchar(50) not null,
apellido varchar(50) not null,
correo varchar(100) not null
);
desc alumnos;


create table profesores(
id int unique auto_increment primary key,
identificacion int not null unique,
nombre varchar(50) not null,
apellido varchar(50) not null,
correo varchar(100) not null,
especialidad varchar(100) not null
);
desc profesores;


create table cursos(
id int unique auto_increment primary key,
codigo int not null	unique,
nombre varchar(50) not null,
horas int not null,
fecha_inicio date not null,
profesor_asignado int not null,

foreign key(profesor_asignado)
references profesores(id)
);
desc cursos;

# correccion de la tabla cursos
show create table cursos;

alter table cursos
modify profesor_asignado int not null;

alter table cursos
drop index profesor_asignado;

show create table cursos;

show index from cursos;

alter table cursos
drop index profesor_asignado;

alter table cursos
add constraint fk_cursos_profesor
foreign key(profesor_asignado)
references profesores(id);

desc cursos;

show create table cursos;

desc cursos;

show create table cursos;

alter table cursos 
drop foreign key cursos_ibfk_1;

alter table cursos 
drop index profesor_asignado;

alter table cursos
add constraint fk_cursos_profesor
foreign key (profesor_asignado)
references profesores(id);

show create table cursos;

desc cursos;
# finalizacion de la corrección 

create table matriculas_cursos(


foreign key(cursos), (alumno)
references cursos(id), alumno(id)
);

