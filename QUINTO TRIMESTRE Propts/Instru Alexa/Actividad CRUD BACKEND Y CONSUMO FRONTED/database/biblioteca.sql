DROP DATABASE IF EXISTS biblioteca;
CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE usuarios (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  nombre    VARCHAR(100) NOT NULL,
  correo    VARCHAR(100) UNIQUE,
  telefono  VARCHAR(20),
  estado    VARCHAR(20)
);

CREATE TABLE autores (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  nombre           VARCHAR(100) NOT NULL,
  nacionalidad     VARCHAR(60),
  fecha_nacimiento DATE
);

CREATE TABLE categorias (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(80) NOT NULL UNIQUE,
  descripcion VARCHAR(200)
);

CREATE TABLE libros (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  titulo           VARCHAR(150) NOT NULL,
  isbn             VARCHAR(30) UNIQUE,
  anio_publicacion INT,
  cantidad         INT,
  autor_id         INT,
  categoria_id     INT,
  CONSTRAINT fk_libros_autor     FOREIGN KEY (autor_id)     REFERENCES autores(id)    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_libros_categoria FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE prestamos (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id       INT,
  libro_id         INT,
  fecha_prestamo   DATE NOT NULL,
  fecha_devolucion DATE,
  estado           VARCHAR(20),
  CONSTRAINT fk_prestamos_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_prestamos_libro   FOREIGN KEY (libro_id)   REFERENCES libros(id)   ON UPDATE CASCADE ON DELETE RESTRICT
);

SELECT * FROM usuarios;

SELECT * FROM autores;

INSERT INTO usuarios (nombre, correo, telefono, estado) VALUES
('Laura Gómez',   'laura@correo.com',  '3101234567', 'activo'),
('Carlos Pérez',  'carlos@correo.com', '3207654321', 'activo'),
('Marta Ruiz',    'marta@correo.com',  '3001112233', 'inactivo');

INSERT INTO autores (nombre, nacionalidad, fecha_nacimiento) VALUES
('Gabriel García Márquez', 'Colombiana', '1927-03-06'),
('Isabel Allende',         'Chilena',    '1942-08-02'),
('Julio Cortázar',         'Argentina',  '1914-08-26');

INSERT INTO categorias (nombre, descripcion) VALUES
('Novela',  'Narrativa extensa de ficción'),
('Cuento',  'Narrativa breve'),
('Ensayo',  'Textos de reflexión y análisis');

INSERT INTO libros (titulo, isbn, anio_publicacion, cantidad, autor_id, categoria_id) VALUES
('Cien años de soledad',   '978-0307474728', 1967, 5, 1, 1),
('La casa de los espíritus','978-0553383805', 1982, 3, 2, 1),
('Rayuela',                '978-8437604572', 1963, 2, 3, 1),
('Bestiario',              '978-8420471839', 1951, 4, 3, 2);

INSERT INTO prestamos (usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado) VALUES
(1, 1, '2026-11-01', '2026-11-15', 'devuelto'),
(2, 3, '2026-11-18', NULL,         'activo');

SHOW TABLES;

-- Libros con autor y categoría (JOIN)
SELECT l.id, l.titulo, a.nombre AS autor, c.nombre AS categoria
FROM libros l
JOIN autores a    ON l.autor_id = a.id
JOIN categorias c ON l.categoria_id = c.id;
-- Préstamos con usuario y libro (JOIN)
SELECT p.id, u.nombre AS usuario, l.titulo AS libro, p.fecha_prestamo, p.fecha_devolucion, p.estado
FROM prestamos p
JOIN usuarios u ON p.usuario_id = u.id
JOIN libros l   ON p.libro_id = l.id;
