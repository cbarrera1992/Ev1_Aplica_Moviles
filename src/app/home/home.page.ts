import { Component, OnInit } from '@angular/core';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  creadaEn: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  tareas: Tarea[] = [];
  titulo = '';
  descripcion = '';
  editandoId: number | null = null;

  ngOnInit() {
    this.cargarTareas();
  }

  cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareasTodoApp');
    this.tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [
      {
        id: Date.now(),
        titulo: 'Estudiar Ionic',
        descripcion: 'Repasar los componentes principales de la interfaz.',
        creadaEn: new Date().toISOString(),
      },
      {
        id: Date.now() + 1,
        titulo: 'Hacer ejercicio',
        descripcion: 'Realizar 30 minutos de actividad física.',
        creadaEn: new Date().toISOString(),
      },
    ];

    this.guardarEnLocalStorage();
  }

  guardarTarea() {
    const tituloValidado = this.titulo.trim();
    const descripcionValidada = this.descripcion.trim();

    if (!tituloValidado || !descripcionValidada) {
      return;
    }

    if (this.editandoId !== null) {
      const tarea = this.tareas.find((item) => item.id === this.editandoId);
      if (tarea) {
        tarea.titulo = tituloValidado;
        tarea.descripcion = descripcionValidada;
      }
    } else {
      this.tareas.unshift({
        id: Date.now(),
        titulo: tituloValidado,
        descripcion: descripcionValidada,
        creadaEn: new Date().toISOString(),
      });
    }

    this.guardarEnLocalStorage();
    this.limpiarFormulario();
  }

  editarTarea(tarea: Tarea) {
    this.editandoId = tarea.id;
    this.titulo = tarea.titulo;
    this.descripcion = tarea.descripcion;
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
    this.guardarEnLocalStorage();

    if (this.editandoId === id) {
      this.limpiarFormulario();
    }
  }

  limpiarFormulario() {
    this.titulo = '';
    this.descripcion = '';
    this.editandoId = null;
  }

  guardarEnLocalStorage() {
    localStorage.setItem('tareasTodoApp', JSON.stringify(this.tareas));
  }

  get totalTareas() {
    return this.tareas.length;
  }
}
