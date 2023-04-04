import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


import { TableroComponent } from './components/tablero/tablero.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { NoEncontradaComponent } from './components/no-encontrada/no-encontrada.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HelpComponent } from './components/help/help.component';




@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    ProyectosComponent,
    ContactosComponent,
    NoEncontradaComponent,
    SobreMiComponent,
    HelpComponent,
  

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
