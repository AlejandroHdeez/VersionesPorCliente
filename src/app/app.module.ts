import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAprovadoresComponent } from './componentes/add-aprovadores/add-aprovadores.component';
import { AddClientesComponent } from './componentes/add-clientes/add-clientes.component';
import { AddProductosComponent } from './componentes/add-productos/add-productos.component';
import { AddSolicitantesComponent } from './componentes/add-solicitantes/add-solicitantes.component';
import { AddSolicitudComponent } from './componentes/add-solicitud/add-solicitud.component';
import { AddSolucionesVerticalesComponent } from './componentes/add-soluciones-verticales/add-soluciones-verticales.component';
import { AprobadoresComponent } from './componentes/aprobadores/aprobadores.component';
import { AddaprobadoresComponent } from './componentes/addaprobadores/addaprobadores.component';
import { AddAprobadoresComponent } from './componentes/add-aprobadores/add-aprobadores.component';
import { ClientesPageComponent } from './componentes/clientes-page/clientes-page.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { InfoClienteComponent } from './componentes/info-cliente/info-cliente.component';
import { InfoProductosComponent } from './componentes/info-productos/info-productos.component';
import { InfoSolucionesVerticalesComponent } from './componentes/info-soluciones-verticales/info-soluciones-verticales.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { SolicitantesComponent } from './componentes/solicitantes/solicitantes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAprovadoresComponent,
    AddClientesComponent,
    AddProductosComponent,
    AddSolicitantesComponent,
    AddSolicitudComponent,
    AddSolucionesVerticalesComponent,
    AprobadoresComponent,
    AddaprobadoresComponent,
    AddAprobadoresComponent,
    ClientesPageComponent,
    HomePageComponent,
    InfoClienteComponent,
    InfoProductosComponent,
    InfoSolucionesVerticalesComponent,
    LoginPageComponent,
    NavbarComponent,
    ProductosComponent,
    RegisterPageComponent,
    SolicitantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
