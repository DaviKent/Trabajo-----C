show databases;

use sakila;

desc sakila;

# eliminar base de datos
drop database ejemplo;

# crear base de datos
create database if not exists ejemplo2;

show databases;

create	schema ejemlo3 charset utf8mb4;

show collation like 'utf8%';

use ejemplo3;
select @@character_set_database, @@collation_database;

create table t (c char(3) character set latin1);
desc t;

insert into t (c) values('AAA'),('bbb'),('aaa'),('BBB');
select c from t;

select c from t order by c collate latin1_general_cs;
select c from t order by c collate latin1_swedish_cs;

drop database ejemplo3;


drop database if exists proveedores;
create database proveedores charset utf8mb4;
use proveedores;

create table categoria(
)