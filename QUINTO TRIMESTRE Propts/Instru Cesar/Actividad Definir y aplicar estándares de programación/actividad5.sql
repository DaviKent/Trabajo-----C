create table gestion_usuarios;
use gestion_usuarios;
create table roles (
    id_rol integer primary key auto_increment,
    nombre_rol varchar(50) not null,
    descripcion varchar(100)
);

create table usuarios (
    id_usuario integer primary key auto_increment,
    nombre varchar(50) not null,
    correo varchar(100) not null unique,
    id_rol integer,
    foreign key (id_rol) references roles(id_rol)
);

create table permisos (
    id_permiso integer primary key auto_increment,
    nombre_permiso varchar(50) not null,
    descripcion varchar(100)
);

create table rol_permisos (
    id_rol_permiso integer primary key auto_increment,
    id_rol integer not null,
    id_permiso integer not null,
    foreign key (id_rol) references roles(id_rol),
    foreign key (id_permiso) references permisos(id_permiso)
);