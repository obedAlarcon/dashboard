import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './components/tablero/tablero.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HelpComponent } from './components/help/help.component';
import { NoEncontradaComponent } from './components/no-encontrada/no-encontrada.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'tablero'
  },
{
  path:'tablero',
  component:TableroComponent
},
{
  path:'proyectos',
  component:ProyectosComponent
},
{
  path:'sobre-mi',
  component:SobreMiComponent

},
{
  path:'help',
  component:HelpComponent
},
{
  path:'**',
  component:NoEncontradaComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
