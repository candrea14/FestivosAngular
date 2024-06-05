import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import {
  ColumnMode,
  NgxDatatableModule,
  SelectionType,
} from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/Festivo';
import { FestivoService } from '../../servicio/FestivoService';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-festivo',
  standalone: true,
  imports: [ReferenciasMaterialModule, FormsModule, NgxDatatableModule],
  templateUrl: './festivo.component.html',
  styleUrl: './festivo.component.css',
})
export class FestivoComponent {
  public textoBusqueda: number = 0;
  public festivos: Festivo[] = [];
  public columnas = [
    {
      name: 'Festivo',
      prop: 'nombre',
    },
    {
      name: 'Fecha',
      prop: 'fecha',
    },
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;


  constructor(
    private servicio: FestivoService,
    private servicioDialogo: MatDialog
  ) {

  }


  obtener() {
    if (this.textoBusqueda > 0) {
      this.servicio.obtener(this.textoBusqueda).subscribe({
        next: (response) => {
          this.festivos = response;
        }, 
        error: (error) => {
          window.alert(error.message);
        },
      });
    }
  }
}
