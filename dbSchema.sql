create database inventario;
create user inventario IDENTIFIED WITH mysql_native_password BY 'inventario';
grant all privileges on inventario.*;

create table equipos ( 
    id int primary key auto_increment, 
    nombre varchar(40), 
    ubicacion varchar(40) 
);
insert into equipos (nombre, ubicacion) values ('DAW1-01','Aula729');