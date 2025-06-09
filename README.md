# Documentación

## Integrantes

1. Patricio Arturo Henríquez Tapia
2. Maximiliano Esteban Miño Silva
3. Tomás Abdiel Pérez Jeria
4. Francisca Javiera Silva Castro
5. Matías Eliseo Villegas Muñoz


## Descripción del problema

La Seremi de Salud de la región de Valparaíso quiere incentivar a los estudiantes que estén cursando la educación media a llegar a sus recintos de educación mediante movilización no motorizada, ya sea a pie, en bicicleta, en skateboard, etc. Para ello, realizaron un proyecto llamado "Guía de transporte activo" el cual consiste en orientar a las escuelas para que establezcan condiciones que mejoren la seguridad y la sostenibilidad de los desplazamientos activos, hacia y desde la escuela para todos(as) los(as) estudiantes.  

Si bien ya existen algunas rutas para llegar a los etablecimientos que estan verificados por personal de la Seremi, difundir tales rutas a través de folletos no es del todo eficiente ya que no se logra el alcance adecuado en el público objetivo. Es por ello que se propone crear una aplicación web y móvil, la cual indicará una ruta segura para llegar al establecimiento y a la vez promoverá la actividad fisica, ya que no se hará uso de transporte motorizado. Además, durante el trayecto de la ruta, el estudiante recibirá notificaciones en tiempo real de su ruta (por ejemplo, si es que alguna calle está cerrada) y el apoderado (tutor del estudiante) puede visualizar la ubicación de su hijo(a) en tiempo real, otorgando asi mayor seguridad. 

## Procedimientos

Antes de crear un modelo, primero conversamos con un representante de la Seremi de Salud para escuchar la problemática y luego obtener los requerimientos. Estos se encuentran en la carpeta "otros" dentro del repositorio y están en formato excel.

Luego de los requerimientos, realizamos un diseño en [figma](https://www.figma.com/design/2mkzKcVYE9YI2iSASCwu6Q/ProyectoWeb?node-id=0-1&t=9CiwlXQJYXb7U3AT-1), que nos será de utilidad para tener una noción de lo que haremos en ionic-angular

## Implementación de estructura de navegación
![Imagen de WhatsApp 2025-05-09 a las 21 19 15_5fc676d0](https://github.com/user-attachments/assets/d6e3fb4f-6f16-4d9e-a6bd-afd17f9c6c1f)

## Implementación de backend en Node.js con Express
Para la integración de Frontend + Backend e implementación de funcionalidades u operaciones CRUD se hizo uso del framework Express. 
En cuanto a las funcionalidades GET, POST, PUT y DELETE es necesario acceder mediante el token generado por el backend.

### Configuración y modelado de Base de datos relacional 
Se implementa una Base de Datos relacional, la cual se encuentra en el backend con el nombre "api_usuarios.sql". Dentro de esta se encuentran las tablas que se utilizan, de las cuales dos serán implementadas más adelante ("eventosusuario" y "nivelcategoria"). 
La tabla "eventos" contiene todos los datos relacionados a un eventos, por lo que tiene los siguientes campos: `id`, `nombre_evento`, `fecha_inicio`, `fecha_termino`, `descripcion`, `ubicacion`, `URL` y se utiliza para visualizar en la página "Calendario" los distintos eventos cercanos que se realizan, de forma que el usuario pueda seleccionarlos y añadirlos a su lista de eventos ("Mis Eventos"). 
La tabla "tabla_usuarios" contiene los datos de los usuarios que se registran en la página/aplicación. Esta contiene los siguientes campos: `id`, `nombre_apellido`, `rut`, `correo`, `ubicacion`, `establecimiento`, `contraseña`, `acepta_terminos`, `fecha_registro`. 

Ambas son utilizadas a través de la realización de las operaciones GET, POST, PUT y DELETE

### Desarrollo de API REST

### Consumo de la API desde Ionic usando HttpClient

### Implementación de autenticación con JWT

### Validación de usuarios y manejo de sesiones 




