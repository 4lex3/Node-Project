# Node Project - Doc

Proyecto de Node que implementa un CRUD básico a través de una REST API, manejando autenticación y tokens.

## Arquitectura General del Proyecto

La arquitectura del proyecto está dividida en dos partes principales: el backend y el frontend, donde el backend es el servidor encargado de la logica de negocio y el frontend de la interfaz del usuario.

![enter image description here](https://raw.githubusercontent.com/4lex3/Node-Project/refs/heads/main/doc/arquitectura.png)

### Backend

Implementado con Node.js y Express, maneja la lógica del negocio, la autenticación y la interacción con las bases de datos MySQL y MongoDB.

- **Rutas**: Definidas en [backend/routes/routes.js](backend/routes/routes.js).
- **Controladores**: Manejan las operaciones CRUD y están ubicados en [backend/controllers](backend/controllers).
- **Modelos**: Definen la estructura de los datos y las operaciones de base de datos, ubicados en [backend/models](backend/models).
- **Configuración**: Archivos de configuración para las bases de datos y el servidor en [backend/config](backend/config).
- **Autenticación**: Implementada en [backend/auth](backend/auth).

### Frontend

Implementado con HTML, CSS y JavaScript, maneja la interfaz de usuario.

- **Archivos HTML**: Definen la estructura de las páginas web.
- **Archivos CSS**: Definen los estilos de las páginas web.
- **Archivos JavaScript**: Manejan la lógica del frontend y las interacciones con la API del backend.

## Implementación de Modelos MySQL y MongoDB

El proyecto soporta dos tipos de bases de datos: MySQL y MongoDB, para ello se han separado sus endpoints, donde /api referencia a SQL y /mongo a mongodb.

![enter image description here](https://raw.githubusercontent.com/4lex3/Node-Project/refs/heads/main/doc/mongomodels.png)

### MySQL

- **Configuración**: La configuración de la base de datos MySQL se encuentra en [backend/config/sql.config.js](backend/config/sql.config.js).
- **Modelo**: El modelo de datos para MySQL está implementado en [backend/models/Library.js](backend/models/Library.js).
- **Controladores**: Los controladores que manejan las operaciones CRUD para MySQL están en [backend/controllers/books.js](backend/controllers/books.js).

### MongoDB

- **Configuración**: La configuración de la base de datos MongoDB se encuentra en [backend/config/mongo.config.js](backend/config/mongo.config.js).
- **Modelo**: El modelo de datos para MongoDB está implementado en [backend/models/LibraryMongo.js](backend/models/LibraryMongo.js).
- **Controladores**: Los controladores que manejan las operaciones CRUD para MongoDB están en [backend/controllers/mongoBooks.js](backend/controllers/mongoBooks.js).

## Endpoints:

![enter image description here](https://raw.githubusercontent.com/4lex3/Node-Project/refs/heads/main/doc/endpoints.png)

- **CRUD de Libros (MySQL)**
    - GET /api/books: Obtener todos los libros.
    - POST /api/books: Crear un nuevo libro.
    - GET /api/books/:id: Obtener un libro por ID.
    - PUT /api/books/:id: Actualizar un libro por ID.
    - DELETE /api/books/:id: Eliminar un libro por ID.

- **CRUD de Libros (MongoDB)**
    - GET /mongo/books: Obtener todos los libros.
    - POST /mongo/books: Crear un nuevo libro.
    - GET /mongo/books/:id: Obtener un libro por ID.
    - PUT /mongo/books/:id: Actualizar un libro por ID.
    - DELETE /mongo/books/:id: Eliminar un libro por ID.

- **Autenticación**
    - POST /api/login: Iniciar sesión y obtener un token JWT.


![enter image description here](https://raw.githubusercontent.com/4lex3/Node-Project/refs/heads/main/doc/crud.png)

## Implementación de Autenticación

Para implementar la autenticacion se ha modificado el backend y frontend, siendo en el backend en el que debemos agregar un endpoint de login y un middleware que verifique el token insertado en las cabeceras para acceder a las rutas protegidas. Por otro lado, debemos cambiar parte del frontend para que se haga un login previo a ingresar al panel de administrador, ademas debemos modificar parte del frontend seteando , ademas debemos modificar parte del frontend seteando , ademas debemos modificar parte del frontend seteando el token de autenticacion.

![enter image description here](https://raw.githubusercontent.com/4lex3/Node-Project/refs/heads/main/doc/auth.png)

- **Configuración del servidor**: La configuración del servidor se encuentra en [backend/config/server.config.js](backend/config/server.config.js).
- **Controlador de autenticación**: El controlador de autenticación está en [backend/auth/auth.controller.js](backend/auth/auth.controller.js).
- **Middleware de autenticación**: El middleware de autenticación está en [backend/auth/auth.js](backend/auth/auth.js).
- **Rutas de autenticación**: Las rutas de autenticación están definidas en [backend/routes/routes.js](backend/routes/routes.js).

### Flujo de Autenticación

1. **Login**: El usuario envía sus credenciales y recibe un token JWT si son correctas.
2. **Protección de rutas**: Las rutas protegidas requieren un token JWT válido en el encabezado de la solicitud.
3. **Verificación de token**: El middleware verifica la validez del token antes de permitir el acceso a las rutas protegidas.

### Requisitos Previos

- Node.js
- MySQL
- MongoDB

### Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
    ```



