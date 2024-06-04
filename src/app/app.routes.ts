import { Routes } from '@angular/router';
import { FestivoComponent } from './features/componentes/festivo/festivo/festivo.component';
import { InicioComponent } from './features/componentes/inicio/inicio.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'selecciones', component: FestivoComponent },
];
