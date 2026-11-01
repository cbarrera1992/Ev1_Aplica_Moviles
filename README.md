# To-Do List App con Ionic

## Descripción
Esta aplicación móvil desarrollada con Ionic y Angular permite registrar, editar y eliminar tareas pendientes. La interfaz incluye un formulario para agregar tareas con título y descripción, además de persistencia local con `localStorage` para conservar la información entre recargas.

## Requisitos
- Node.js 18 o superior
- npm
- Ionic CLI

## Instalación
```bash
npm install
```

## Ejecución
```bash
npm start -- --host=0.0.0.0
```

La aplicación queda disponible en:
```text
http://localhost:4200/
```

## Funcionalidades
- Agregar tareas
- Editar tareas existentes
- Eliminar tareas
- Guardar tareas en almacenamiento local
- Mostrar la cantidad total de tareas
- Vista móvil amigable

## Estructura principal
```text
src/
  app/
    home/
      home.page.ts
      home.page.html
      home.page.scss
```

## Observación
El proyecto fue desarrollado como base para una actividad evaluativa de la asignatura, con posibilidad de continuar con futuras funcionalidades como almacenamiento más avanzado, autenticación y conexión con APIs.
