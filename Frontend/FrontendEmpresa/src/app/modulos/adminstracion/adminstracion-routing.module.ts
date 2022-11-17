import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPersonaComponent } from './personas/actualizar-persona/actualizar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';

const routes: Routes = [
  {
    path:'crear-persona',
    component:CrearPersonaComponent
  },
  {
    path:'actuaizar-persona',
    component:ActualizarPersonaComponent
  },
  {
    path:'eliminar-persona',
    component:EliminarPersonaComponent
  },
  {
    path:'buscar-persona',
    component:BuscarPersonaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminstracionRoutingModule { }
