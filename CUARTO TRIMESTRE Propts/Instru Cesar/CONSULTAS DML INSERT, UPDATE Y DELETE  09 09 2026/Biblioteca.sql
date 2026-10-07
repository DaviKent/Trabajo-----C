# 1 Crear la base de datos y las tablas
create database biblioteca;
use biblioteca;

create table autor (
    idautor int primary key auto_increment,
    nombres varchar(50),
    apellidos varchar(50),
    nacionalidad varchar(30)
);

create table editorial (
    ideditorial int primary key auto_increment,
    nombre varchar(50)
);

create table libro (
    idlibro int primary key auto_increment,
    titulo varchar(100),
    categoria varchar(50),
    fechapublicacion date,
    idioma varchar(30),
    idautor int,
    ideditorial int,
    foreign key (idautor) references autor(idautor),
    foreign key (ideditorial) references editorial(ideditorial)
);

# 2 Insertar 3 editoriales
insert into editorial (nombre)
values
('norma'),
('aguilar'),
('alfaguaira');

#Consulta de todas las editoriales
select * from editorial;

# 3 Insertar 2 autores Colombianos
insert into autor (nombres, apellidos, nacionalidad)
values
('gabriel', 'garcía márquez', 'colombiano'),
('laura', 'restrepo', 'colombiano');

# 4 Insertar 2 autores peruanos
insert into autor (nombres, apellidos, nacionalidad)
values
('mario', 'vargas llosa', 'peruano'),
('julio ramón', 'ribeyro', 'peruano');

# 5 Insertar 1 autor mexicano
insert into autor (nombres, apellidos, nacionalidad)
values
('carlos', 'fuentes', 'mexicano');

# Consulta de todos los autores
select * from autor;

# 6 Insertar un libro para cada autor
insert into libro (titulo, categoria, fechapublicacion, idioma, idautor, ideditorial)
values
('cien años de soledad', 'novela', '1967-05-30', 'español', 1, 1),
('delirio', 'novela', '2004-01-01', 'español', 2, 2),
('la ciudad y los perros', 'novela', '1963-01-01', 'español', 3, 3),
('los gallinazos sin plumas', 'cuento', '1955-01-01', 'español', 4, 1),
('la región más transparente', 'novela', '1958-01-01', 'español', 5, 2);

# 7 Consulta de los libros incluyendo los datos del autor
select
libro.titulo,
autor.nombres,
autor.apellidos,
autor.nacionalidad,
libro.categoria,
libro.fechapublicacion,
libro.idioma
from libro
inner join autor
on libro.idautor = autor.idautor;

# 8 Actualizar alfaguaira por alfaguara
update editorial
set nombre = 'alfaguara'
where ideditorial = 3;

# Consulta de la editorial alfaguara
select * from editorial
where nombre = 'alfaguara';

# 9 Actualizar el autor mexicano
update autor
set nombres = 'vicente',
apellidos = 'fernández'
where idautor = 5;

# Consulta del autor mexicano
select * from autor
where idautor = 5;

# 10 Consulta del libro del autor mexicano
select
libro.titulo,
libro.categoria,
libro.fechapublicacion,
libro.idioma
from libro
inner join autor
on libro.idautor = autor.idautor
where autor.nacionalidad = 'mexicano';

# 11 Actualizar el idioma del libro del autor mexicano a mandarin
update libro
set idioma = 'mandarin'
where idautor = (
    select idautor
    from autor
    where nacionalidad = 'mexicano'
);

# Consulta del libro del autor mexicano
select
libro.titulo,
libro.categoria,
libro.fechapublicacion,
libro.idioma
from libro
inner join autor
on libro.idautor = autor.idautor
where autor.nacionalidad = 'mexicano';

# 12 Eliminar el libro de uno de los autores colombianos
delete from libro
where idautor = 2;

# Consulta de todos los libros
select * from libro;

# 13 Eliminar todos los libros del idioma mandarin
delete from libro
where idlibro = 5;

# Consulta de todos los libros
select * from libro;

# 14 Consulta con titulo, autor, editorial y fecha
select
libro.titulo, concat(autor.nombres, ' ', autor.apellidos) as autor,
editorial.nombre as editorial,
libro.fechapublicacion
from libro
inner join autor
on libro.idautor = autor.idautor
inner join editorial
on libro.ideditorial = editorial.ideditorial;

# 15 Insertar 5 editoriales mas
insert into editorial (nombre)
values
('planeta'),
('penguin random house'),
('seix barral'),
('alianza'),
('tusquets');

# 16 Insertar 5 autores de nacionalidades suramericanas
insert into autor (nombres, apellidos, nacionalidad)
values
('jorge luis', 'borges', 'argentino'),
('isabel', 'allende', 'chilena'),
('eduardo', 'galeano', 'uruguayo'),
('augusto', 'roa bastos', 'paraguayo'),
('jorge', 'amado', 'brasileño');

# 17 Insertar 2 libros por cada autor nuevo
insert into libro (titulo, categoria, fechapublicacion, idioma, idautor, ideditorial)
values
('ficciones', 'cuento', '1944-01-01', 'español', 6, 4),
('el aleph', 'cuento', '1949-01-01', 'español', 6, 5),

('la casa de los espíritus', 'novela', '1982-01-01', 'español', 7, 6),
('paula', 'novela', '1994-01-01', 'español', 7, 7),

('las venas abiertas de américa latina', 'ensayo', '1971-01-01', 'español', 8, 8),
('el libro de los abrazos', 'ensayo', '1989-01-01', 'español', 8, 4),

('yo el supremo', 'novela', '1974-01-01', 'español', 9, 5),
('hijo de hombre', 'novela', '1960-01-01', 'español', 9, 6),

('capitanes de la arena', 'novela', '1937-01-01', 'portugués', 10, 7),
('gabriela, clavo y canela', 'novela', '1958-01-01', 'portugués', 10, 8);

# 18 Actualizar las fechas de todos los libros
update libro
set fechapublicacion = '2026-01-01'
where idlibro > 0;

# 19 Consulta final
select
libro.titulo, concat(autor.nombres, ' ', autor.apellidos) as autor,
editorial.nombre as editorial,
libro.fechapublicacion
from libro
inner join autor
on libro.idautor = autor.idautor
inner join editorial
on libro.ideditorial = editorial.ideditorial;