use instituto;
select * from alumno
where apellido1= "sanchez";

select * from alumno
where id =9;

select nombre, fecha_nacimiento
from alumno
where fecha_nacimiento > '1997/01/01'; #Año/mes/dia

select * from alumno;
select * from alumno
where es_repetidor = "no";

select * from alumno
where (
fecha_nacimiento>'1994/01/01' 
and es_repetidor='no'
);
select * from alumno
where (
fecha_nacimiento > '1997/12/31'
and fecha_nacimiento < '1999/01/01'
);

select * from alumno
where(year(fecha_nacimiento)='1998');

select * from alumno
where(year(fecha_nacimiento)!='1998'); # <> o != diferente de =

select * from alumno
where apellido1
in ('Martinez', 'Sanchez');

 