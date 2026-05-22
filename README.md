# Tiendita

`Tiendita` es una aplicación web de ejemplo desarrollada con Angular 20, diseñada como una pequeña landing page comercial que muestra productos destacados, ofertas y una sección de contacto.

## Descripción del proyecto

Esta aplicación contiene una página principal (`/home`) con una presentación visual moderna y tarjetas informativas para una tienda virtual ficticia. El proyecto usa:

- Angular 20
- Router de Angular para la navegación
- Tailwind CSS para estilos globales
- Arquitectura de componentes simple con página `Home`

## Características principales

- Página de inicio con hero y productos destacados
- Navegación básica mediante ruta única `/home`
- Estilos y animaciones para una experiencia visual atractiva
- Base lista para extender a un sitio de ecommerce o catálogo de productos

## Estructura del proyecto

- `src/main.ts`: punto de entrada de la aplicación
- `src/app/app.ts`: componente raíz de Angular
- `src/app/app.routes.ts`: rutas configuradas de la app
- `src/app/app.config.ts`: configuración de Angular con router y detección de cambios
- `src/app/pages/home/`: componente y plantilla de la página de inicio
- `src/styles.css`: estilos globales y carga de Tailwind CSS

## Requisitos previos

- Node.js 18+ o superior
- npm 10+ o superior

## Instalación

Desde la raíz del proyecto, ejecuta:

```bash
npm install
```

## Ejecución en desarrollo

Inicia el servidor de desarrollo con:

```bash
npm start
```

Luego abre en el navegador:

```text
http://localhost:4200/
```

La aplicación recargará automáticamente los cambios.

## Comandos útiles

- `npm start` — ejecuta `ng serve` y levanta el servidor de desarrollo
- `npm run build` — compila la aplicación para producción en `dist/`
- `npm test` — ejecuta los tests unitarios configurados con Karma

## Rutas disponibles

- `/home` — página principal de la tienda
- `/` — redirige automáticamente a `/home`

## Personalización

Puedes ampliar esta plantilla añadiendo:

- nuevos componentes para catálogo y detalle de productos
- servicios para consumir datos desde una API
- autenticación de usuarios y gestión de sesión
- carrito de compras y filtros por categoría

## Notas

- El proyecto está orientado a ser una demostración visual y de estructura básica.
- Actualmente no hay pruebas e2e preconfiguradas.
- La página `Home` contiene estilos integrados y animaciones en su propia plantilla.

## Recursos

- Angular: https://angular.io/
- Angular CLI: https://angular.io/cli
- Tailwind CSS: https://tailwindcss.com/
