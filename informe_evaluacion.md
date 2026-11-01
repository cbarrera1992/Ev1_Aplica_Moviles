# Evaluación Unidad 1 - Aplicación To-Do List con Ionic

## 1. Portada
**Asignatura:** Desarrollo de aplicaciones móviles  
**Profesor:** [Nombre del profesor]  
**Curso:** [Nombre del curso]  
**Integrantes:** [Nombre del estudiante 1], [Nombre del estudiante 2], [Nombre del estudiante 3]  
**Título:** Aplicación móvil To-Do List con Ionic  
**Fecha:** 27 de octubre de 2026

---

## 2. Introducción
El presente trabajo corresponde a la actividad evaluativa de la Unidad 1 del curso de desarrollo de aplicaciones móviles. El objetivo es crear una aplicación móvil básica con Ionic que permita gestionar tareas pendientes mediante un formulario, lista de tareas y opciones para editar y eliminar registros.

El proyecto se desarrolla con Ionic CLI, Angular, HTML, CSS y TypeScript, siguiendo los principios básicos de componentes reutilizables y diseño responsivo para entorno móvil.

---

## 3. Objetivos del proyecto
- Instalar y configurar el entorno de desarrollo con Node.js e Ionic CLI.
- Crear un proyecto base de aplicación móvil con Angular y Ionic.
- Diseñar una interfaz funcional para la gestión de tareas.
- Implementar las operaciones de agregar, editar y eliminar tareas.
- Documentar el proceso de desarrollo de forma clara y organizada.

---

## 4. Requisitos funcionales
La aplicación debe cumplir con los siguientes requisitos:
1. Mostrar una lista de tareas pendientes.
2. Cada tarea debe tener un título y una descripción.
3. Permitir la creación de nuevas tareas.
4. Permitir la edición de tareas existentes.
5. Permitir la eliminación de tareas.
6. Mantener la información en almacenamiento local para conservar los datos.
7. Presentar una interfaz clara y usable en dispositivos móviles.

---

## 5. Tecnologías utilizadas
- Node.js
- Ionic CLI
- Angular
- TypeScript
- HTML
- CSS
- localStorage del navegador

---

## 6. Preparación del entorno
Para preparar el entorno de desarrollo se ejecutaron los siguientes pasos:

1. Verificación de la versión de Node.js.
2. Instalación de Ionic CLI mediante npm.
3. Creación del proyecto con la plantilla base de Angular.
4. Instalación de dependencias del proyecto.
5. Ejecución del proyecto en un servidor local.

Comandos utilizados:
```bash
npm install -g @ionic/cli
ionic start todoApp blank --type=angular
cd todoApp
npm install
npm start -- --host=0.0.0.0
```

---

## 7. Estructura del proyecto
La estructura principal del proyecto es la siguiente:
```text
todoApp/
├── src/
│   └── app/
│       └── home/
│           ├── home.page.ts
│           ├── home.page.html
│           ├── home.page.scss
│           ├── home.module.ts
│           └── home-routing.module.ts
├── angular.json
├── package.json
├── README.md
├── informe_evaluacion.md
└── www/
```

### Archivos principales
- `home.page.ts`: contiene la lógica de la aplicación.
- `home.page.html`: contiene la estructura visual.
- `home.page.scss`: contiene los estilos visuales.
- `README.md`: explica la instalación y uso del proyecto.

---

## 8. Desarrollo de la interfaz
La aplicación cuenta con los siguientes elementos:
- `ion-header` y `ion-toolbar` para la cabecera.
- `ion-card` para el formulario de ingreso de tareas.
- `ion-input` para el título.
- `ion-textarea` para la descripción.
- `ion-button` para guardar, editar y eliminar.
- `ion-list` para visualizar las tareas.
- `ion-badge` para mostrar la cantidad total de tareas.

La interfaz se diseñó con una apariencia limpia y adaptable a dispositivos móviles, cumpliendo con los estándares básicos del diseño de aplicaciones.

---

## 9. Lógica de la aplicación
En el archivo `home.page.ts` se implementaron las siguientes funcionalidades:

- Carga inicial de tareas desde `localStorage`.
- Validación de campos antes de guardar.
- Agregado de nuevas tareas.
- Edición de tareas existentes.
- Eliminación de tareas.
- Guardado persistente en el navegador.

La lógica principal se basa en un arreglo de objetos, donde cada tarea contiene:
- `id`
- `titulo`
- `descripcion`
- `creadaEn`

---

## 10. Resultados obtenidos
La aplicación permite:
- Crear tareas con título y descripción.
- Editarlas en cualquier momento.
- Eliminar tareas rápidamente.
- Mantener la información en almacenamiento local.
- Ver una lista dinámica y actualizada en tiempo real.

---

## 11. Capturas de pantalla
El proyecto debe entregarse con evidencias visuales para comprobar el funcionamiento de la aplicación. En un entorno real, se recomienda capturar lo siguiente:
- pantalla principal con el formulario
- lista de tareas creadas
- edición de una tarea
- eliminación de una tarea

Ejemplo visual esperado:
```text
Pantalla principal de la app
┌────────────────────────────┐
a To-Do List                 │
│ Título: ...                │
│ Descripción: ...           │
│ [Agregar tarea]            │
├────────────────────────────┤
│ Tarea 1                    │
│ Editar  Eliminar           │
│ Tarea 2                    │
└────────────────────────────┘
```

---

## 12. Conclusión
El proyecto cumple con los requisitos básicos de la evaluación de la Unidad 1: ha sido desarrollado con Ionic, integra un formulario y gestión de tareas, y demuestra la comprensión de los conceptos fundamentales de la creación de aplicaciones móviles. Además, deja una base sólida para futuras unidades, donde se espera incorporar funcionalidades avanzadas como almacenamiento persistente más robusto, autenticación y comunicación con APIs externas.

---

## 13. Recomendaciones para la entrega final
Para entregar la evaluación, se recomienda:
1. Ejecutar la aplicación localmente.
2. Tomar capturas de pantalla del formulario y la lista de tareas.
3. Generar un documento final en Word o PDF con portada y contenido.
4. Comprimir la carpeta del proyecto con nombre:
```text
EVU1_APELLIDO_NOMBRE.zip
```
5. Subir el archivo zip a la plataforma indicada por el instructor.

---

## 14. Bibliografía y recursos
- Ionic Framework Documentation
- Angular Documentation
- Node.js Official Documentation
- MDN Web Docs
