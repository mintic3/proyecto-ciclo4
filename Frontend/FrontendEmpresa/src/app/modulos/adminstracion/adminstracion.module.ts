import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminstracionRoutingModule } from './adminstracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { ActualizarPersonaComponent } from './personas/actualizar-persona/actualizar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    ActualizarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent
  ],
  imports: [
    CommonModule,
    AdminstracionRoutingModule
  ]
})
export class AdminstracionModule { }
