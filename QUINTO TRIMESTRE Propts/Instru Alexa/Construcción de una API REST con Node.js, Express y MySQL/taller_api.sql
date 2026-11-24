CREATE DATABASE taller_api;
USE taller_api;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  direccion VARCHAR(200) NULL,
  telefono VARCHAR(20) NULL
);

CREATE TABLE IF NOT EXISTS productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL
);

SELECT * FROM usuarios;

SELECT * FROM productos;

INSERT INTO usuarios (nombre, apellido, direccion, telefono) VALUES
  ('Yalanda', 'Cristian', 'Popayán', '3105555555');

INSERT INTO productos (nombre, descripcion, precio, stock) VALUES
  ('Portátil Lenovo', 'Core i7, 16 GB RAM', 3500000, 10),
  ('Mouse inalámbrico', 'Logitech 2.4 GHz', 85000, 3),
  ('Monitor 24"', 'Full HD IPS', 650000, 0);
