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
  selector: 'app-inicio',
  standalone: true,
  imports: [ReferenciasMaterialModule, FormsModule, NgxDatatableModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  public ano: number = 0;
  public mes: number = 0;
  public dia: number = 0;
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
  ) {}

  verificar() {
    if (this.ano > 0 && this.mes > 0 && this.dia > 0) {
      this.servicio.verificar(this.ano, this.mes, this.dia).subscribe({
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
