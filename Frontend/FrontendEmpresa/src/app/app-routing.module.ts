import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/inicio'
  },
  {
    path:'autenticacion',
    loadChildren:() => import('./modulos/seguridad/seguridad.module').then(x => x.SeguridadModule)
  },
  {
    path:'administracion',
    loadChildren:() => import('./modulos/adminstracion/adminstracion.module').then(m => m.AdminstracionModule)
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
