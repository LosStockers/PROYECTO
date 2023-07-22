-- ============================================
-- Fecha: 20/7/2023
-- ============================================

USE EmeraldStockers;

-- Tabla "Usuario" para almacenar información de los usuarios del sistema
CREATE TABLE Usuario (
    Correo varchar(50) PRIMARY KEY NOT NULL,
    Nombre varchar(25) NOT NULL, 
    Privilegio int(1),
    Negocio varchar(35) NOT NULL
);

-- Tabla "Registra"
CREATE TABLE Registra (
    Fecha date
);

-- Tabla "Pagina" 
CREATE TABLE Pagina (
    ID int(8) PRIMARY KEY NOT NULL,
    Contraseña varchar(35) NOT NULL
);

-- Tabla "Sube" para registrar fechas de subida de contenido
CREATE TABLE Sube (
    Fecha date
);

-- Tabla "Elemento" para almacenar información de los elementos en stock
CREATE TABLE Elemento (
    CodigoBarras int(16) PRIMARY KEY,
    Nombre varchar(35) NOT NULL,
    Volumen varchar(20),
    FechaVen date,
    Stock Int(4),
    SubFamilia varchar(35),
    Familia varchar(35),
    Negocio varchar(35),
    ArchivoImagen varchar(40)
);

-- Tabla "Tiene" para registrar fechas asociadas a elementos
CREATE TABLE Tiene (
    Fecha date
);

-- Tabla "Nota" para almacenar descripciones y notas relacionadas
CREATE TABLE Nota (
    ID int(8) PRIMARY KEY,
    Descripcion varchar(50)
);
