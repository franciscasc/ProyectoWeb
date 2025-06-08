-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2025 a las 01:16:32
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api_usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `nombre_evento` varchar(100) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fecha_termino` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `descripcion` varchar(100) DEFAULT NULL,
  `ubicacion` varchar(100) DEFAULT NULL,
  `URL` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `nombre_evento`, `fecha_inicio`, `fecha_termino`, `descripcion`, `ubicacion`, `URL`) VALUES
(1, 'Caminata canina', '2025-05-12 04:00:00', '2025-05-12 04:00:00', 'Participa en familia junto con tus mascotas de una agradable actividad', 'Viña del Mar', 'link'),
(2, 'Maraton 10k', '2025-06-29 04:00:00', '2025-06-29 04:00:00', 'Nueva Maratón desde con con hasta Viña, inscripciones desde mañana a las 12 del día', 'Con Con', 'link'),
(3, 'Triatlon', '2025-10-13 03:00:00', '2025-10-13 03:00:00', '', 'Viña del Mar', 'link'),
(4, 'Maratón 21k', '2025-12-13 03:00:00', '2025-12-13 03:00:00', '', 'Viña del Mar', 'link'),
(5, 'Maratón Puma 10km', '2025-10-05 03:00:00', '2025-10-06 02:59:00', 'El Puma Maratón de Viña del Mar se celebra con un recorrido cuya distancia abarca el borde costero d', 'Viña del Mar', 'https://corre.cl/evento/11375'),
(6, 'Maratón Puma 21km', '2025-10-05 03:00:00', '2025-10-06 02:59:00', 'El Puma Maratón de Viña del Mar se celebra con un recorrido cuya distancia abarca el borde costero d', 'Viña del Mar', 'https://corre.cl/evento/11375'),
(7, 'Maratón Puma 42km', '2025-10-05 03:00:00', '2025-10-06 02:59:00', 'El Puma Maratón de Viña del Mar se celebra con un recorrido cuya distancia abarca el borde costero d', 'Viña del Mar', 'https://corre.cl/evento/11375'),
(8, 'Adopción de Mascotas', '2025-06-15 04:00:00', '2025-06-16 04:00:00', 'Evento de adopción responsable de mascotas.', 'Parque Quinta Normal, Santiago', 'https://ejemplo.com/evento-adopcion'),
(9, 'Feria de Adopción de Mascotas', '2025-05-31 02:12:26', '2025-05-31 02:12:26', 'Un evento comunitario para promover la adopción responsable de mascotas. Incluye charlas, actividade', 'Parque Central, Santiago', 'https://agenciademascota.cl/eventos/feria-adopcion-2025'),
(10, 'Adopción de Mascotas', '2025-06-15 04:00:00', '2025-06-16 04:00:00', 'Evento de adopción responsable de mascotas.', 'Parque Quinta Normal, Santiago', 'https://ejemplo.com/evento-adopcion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventosusuario`
--

CREATE TABLE `eventosusuario` (
  `id_user` int(11) NOT NULL COMMENT 'Id del usuario',
  `id_event` int(11) NOT NULL COMMENT 'Id del evento'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventosusuario`
--

INSERT INTO `eventosusuario` (`id_user`, `id_event`) VALUES
(1, 1),
(1, 2),
(9, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivelcategoria`
--

CREATE TABLE `nivelcategoria` (
  `id_user` int(11) NOT NULL,
  `level` char(1) DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nivelcategoria`
--

INSERT INTO `nivelcategoria` (`id_user`, `level`) VALUES
(1, '2'),
(2, '2'),
(7, '2'),
(8, '2'),
(9, '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_usuarios`
--

CREATE TABLE `tabla_usuarios` (
  `id` int(11) NOT NULL,
  `nombre_apellido` varchar(100) NOT NULL,
  `rut` varchar(10) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `ubicacion` varchar(100) DEFAULT NULL,
  `establecimiento` varchar(100) DEFAULT NULL,
  `contraseña` varchar(255) NOT NULL,
  `acepta_terminos` tinyint(1) NOT NULL DEFAULT 0,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tabla_usuarios`
--

INSERT INTO `tabla_usuarios` (`id`, `nombre_apellido`, `rut`, `correo`, `ubicacion`, `establecimiento`, `contraseña`, `acepta_terminos`, `fecha_registro`) VALUES
(1, 'Juan Pérez', '12345678-9', 'juan@example.com', 'Santiago', 'Colegio Ejemplo', 'mi_clave_segura', 1, '0000-00-00 00:00:00'),
(2, 'María González', '98765432-1', 'maria.gonzalez@mail.com', 'Valparaíso', 'Liceo Central', 'clave12345', 1, '0000-00-00 00:00:00'),
(7, 'María Torres', '12345678-2', 'maria@correo.com', 'Santiago', 'Colegio XYZ', '$2b$10$esMIxj9FuVWGe6IvSqPktua2V663NFzOXnIWzsbfMTcqRmRYDbepi', 1, '0000-00-00 00:00:00'),
(8, 'Juan', '67192345-9', 'aaaa@prueba.com', 'santiago', 'sscc', '$2b$10$2fBo59Im7tFBo6PZQfAL/.v/uC6A5xR59h12sXp6Z8LdTfMGv6Xr.', 1, '0000-00-00 00:00:00'),
(9, 'Juan Lopez', '12.345.678', 'juan.perez@ejemplo.com', 'Santiago, Chile', 'Veterinaria AnimalCare', '$2b$10$g9nV1CyeeLCENFGjO/Xqau3SWRwFYwTjmsbZGsgsWFuRMVs1yGIyK', 1, '0000-00-00 00:00:00'),
(10, 'Max', '123456788', 'max@gmail.com', 'Stgo,Viña', 'SSCC', '$2b$10$N9eoTNm4AVVjKIntqutEG.gBQRjGroVvJQNnvMtA.G5JSQ1KKowmi', 1, '0000-00-00 00:00:00'),
(11, 'test', '12345656-7', 'a@gmaill.com', 'Viña del Mar', 'SSCC Monjas Francesas', '$2b$10$YGikDmAnVjUs/5kL7YsBduQbTpipPD1yYr8LUpqOjrKo9KNcJFCnO', 1, '0000-00-00 00:00:00'),
(12, 'prueba', '12', 'prueba@gmail.com', 'Viña del Mar', 'SSCC Monjas Francesas', '$2b$10$AUT1USAvxSMbHQnQzQEAp.4gCkACIvXB.9dfWTVmrOtksJi.oUe1i', 1, '0000-00-00 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tabla_usuarios`
--
ALTER TABLE `tabla_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rut` (`rut`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `tabla_usuarios`
--
ALTER TABLE `tabla_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
