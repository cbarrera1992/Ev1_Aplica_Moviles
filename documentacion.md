# Aplicación To-Do List con Ionic

## 1. Descripción del proyecto
Esta aplicación móvil permite registrar, visualizar, editar y eliminar tareas pendientes. La interfaz está construida con Ionic y Angular, siguiendo los requisitos de la evaluación de la Unidad 1.

## 2. Objetivos
- Crear una app móvil básica con Ionic.
- Implementar una lista de tareas con formulario.
- Permitir agregar, editar y eliminar tareas.
- Documentar la estructura del proyecto y el proceso de desarrollo.

## 3. Tecnologías utilizadas
- Node.js
- Ionic CLI
- Angular
- TypeScript
- HTML
- CSS
- Ionic Components

## 4. Preparación del entorno
1. Instalar Node.js.
2. Instalar Ionic CLI:
   ```bash
   npm install -g @ionic/cli
   ```
3. Crear el proyecto:
   ```bash
   ionic start todoApp blank --type=angular
   ```
4. Iniciar la aplicación:
   ```bash
   cd todoApp
   ionic serve --host=0.0.0.0
   ```

## 5. Estructura del proyecto
- src/app/home/home.page.ts: lógica de la aplicación.
- src/app/home/home.page.html: estructura visual.
- src/app/home/home.page.scss: estilos.
- src/app/home/home.module.ts: configuración del módulo de la página.

## 6. Componentes principales usados
- ion-header
- ion-toolbar
- ion-title
- ion-content
- ion-card
- ion-item
- ion-input
- ion-button
- ion-list
- ion-label

## 7. Funcionalidades implementadas
- Agregar nueva tarea.
- Editar una tarea existente.
- Eliminar una tarea.
- Mostrar la lista de tareas con título y descripción.
- Limpiar el formulario tras guardar.

## 8. Resultados esperados
La aplicación debe quedar disponible en:
```text
http://localhost:8100
```

## 9. Conclusión
La aplicación cumple con los requisitos mínimos de la evaluación: permite gestionar tareas pendientes desde una interfaz móvil simple y funcional, y sirve como base para futuras funcionalidades más avanzadas.
