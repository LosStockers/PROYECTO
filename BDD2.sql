-- ============================================
-- Fecha: 20/7/2023
-- ============================================
CREATE DATABASE EmeraldStockers;

USE EmeraldStockers;

-- Tabla "Usuario" para almacenar información de los usuarios del sistema
CREATE TABLE Usuario (
    Correo varchar(50) PRIMARY KEY NOT NULL,    -- Campo para almacenar el correo del usuario. Es la clave primaria y no puede ser nulo.
    Nombre varchar(25) NOT NULL,               -- Campo para almacenar el nombre del usuario. No puede ser nulo.
    Privilegio int(1),                         -- Campo para almacenar el nivel de privilegio del usuario.
    Negocio varchar(35) NOT NULL               -- Campo para almacenar el nombre del negocio al que pertenece el usuario. No puede ser nulo.
    
);

-- Tabla "Registra" para registrar fechas de registro de usuarios
CREATE TABLE Registra (
    CorreoUsuario varchar(50) PRIMARY KEY,     -- Campo para almacenar el correo del usuario que se registra. Es la clave primaria.
    FechaRegistro date NOT NULL,               -- Campo para almacenar la fecha de registro del usuario. No puede ser nulo.
    FOREIGN KEY (CorreoUsuario) REFERENCES Usuario(Correo)    -- Clave foránea que referencia el campo "Correo" en la tabla "Usuario".
);

-- Tabla "Pagina" para almacenar credenciales de acceso a páginas
CREATE TABLE Pagina (
    ID int(8) PRIMARY KEY NOT NULL,            -- Campo para almacenar el ID de la página. Es la clave primaria y no puede ser nulo.
    Contraseña varchar(35) NOT NULL,           -- Campo para almacenar la contraseña de la página. No puede ser nulo.
    CorreoUsuario varchar(50) NOT NULL,        -- Campo para almacenar el correo del usuario al que pertenece la página. No puede ser nulo.
    FOREIGN KEY (CorreoUsuario) REFERENCES Usuario(Correo)    -- Clave foránea que referencia el campo "Correo" en la tabla "Usuario".
);

-- Tabla "Sube" para registrar fechas de subida de contenido
CREATE TABLE Sube (
    Fecha date PRIMARY KEY,                    -- Campo para almacenar la fecha de subida de contenido. Es la clave primaria.
    CodigoBarrasElemento int(16) NOT NULL,     -- Campo para almacenar el código de barras del elemento asociado a la subida. No puede ser nulo.
    FOREIGN KEY (CodigoBarrasElemento) REFERENCES Elemento(CodigoBarras)    -- Clave foránea que referencia el campo "CodigoBarras" en la tabla "Elemento".
);

-- Tabla "Elemento" para almacenar información de los elementos en stock
CREATE TABLE Elemento (
    CodigoBarras int(16) PRIMARY KEY NOT NULL,          -- Campo para almacenar el código de barras del elemento. Es la clave primaria.
    Nombre varchar(35) NOT NULL,               -- Campo para almacenar el nombre del elemento. No puede ser nulo.
    Volumen varchar(20),                       -- Campo para almacenar el volumen del elemento.
    FechaVen date,                             -- Campo para almacenar la fecha de vencimiento del elemento.
    Stock Int(4),                              -- Campo para almacenar el stock disponible del elemento.
    SubFamilia varchar(35),                    -- Campo para almacenar la subfamilia a la que pertenece el elemento.
    Familia varchar(35),                       -- Campo para almacenar la familia a la que pertenece el elemento.
    Negocio varchar(35),                       -- Campo para almacenar el nombre del negocio al que pertenece el elemento.
    ArchivoImagen json                  -- Campo para almacenar imagen asociada al elemento.
);

-- Tabla "Tiene" para registrar fechas asociadas a elementos
CREATE TABLE Tiene (
    Fecha date PRIMARY KEY,                    -- Campo para almacenar la fecha asociada al elemento. Es la clave primaria.
    CodigoBarrasElemento int(16) NOT NULL,     -- Campo para almacenar el código de barras del elemento asociado. No puede ser nulo.
    FOREIGN KEY (CodigoBarrasElemento) REFERENCES Elemento(CodigoBarras)    -- Clave foránea que referencia el campo "CodigoBarras" en la tabla "Elemento".
);

-- Tabla "Nota" para almacenar descripciones y notas relacionadas
CREATE TABLE Nota (
    ID int(8) PRIMARY KEY,                    -- Campo para almacenar el ID de la nota. Es la clave primaria.
    Descripcion varchar(50)                   -- Campo para almacenar la descripción de la nota.
);

-- Tabla "BaseUsuario" para almacenar las bases de datos del usuarios
CREATE TABLE BaseUsuario (
    IDregistro varchar(50) NOT NULL,        -- Campo para almacenar el correo del usuario dueño de la base de datos
    NombreBDD varchar(50) PRIMARY KEY NOT NULL                      -- Campo para almacenar el nombre de la base de datos
);
