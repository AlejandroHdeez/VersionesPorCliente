import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientesComponent } from './componentes/add-clientes/add-clientes.component';
import { AddProductosComponent } from './componentes/add-productos/add-productos.component';
import { AddSolicitantesComponent } from './componentes/add-solicitantes/add-solicitantes.component';
import { AddSolicitudComponent } from './componentes/add-solicitud/add-solicitud.component';
import { AddSolucionesVerticalesComponent } from './componentes/add-soluciones-verticales/add-soluciones-verticales.component';
import { AprobadoresComponent } from './componentes/aprobadores/aprobadores.component';
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
import { SolicitudesComponent } from './componentes/solicitudes/solicitudes.component';
import { ADSolicitudesComponent } from './componentes/adsolicitudes/adsolicitudes.component';
import { EstadoSolicitudComponent } from './componentes/estado-solicitud/estado-solicitud.component';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ToastrModule} from 'ngx-toastr';

import { ClientesService } from './services/clientes.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { ClientesAService } from './services/clientes-a.service';


@NgModule({
  declarations: [
    AppComponent,
    AddClientesComponent,
    AddProductosComponent,
    AddSolicitantesComponent,
    AddSolicitudComponent,
    AddSolucionesVerticalesComponent,
    AprobadoresComponent,
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
    SolicitantesComponent,
    SolicitudesComponent,
    ADSolicitudesComponent,
    EstadoSolicitudComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FlashMessagesModule,
    ReactiveFormsModule
  ],
  providers: [ClientesService, ClientesAService],
  bootstrap: [AppComponent]
})
export class AppModule { }
