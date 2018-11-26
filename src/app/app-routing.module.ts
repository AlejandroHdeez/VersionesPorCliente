import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { ClientesPageComponent } from './componentes/clientes-page/clientes-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { AddClientesComponent } from './componentes/add-clientes/add-clientes.component';
import { InfoClienteComponent } from './componentes/info-cliente/info-cliente.component';
import { SolicitantesComponent } from './componentes/solicitantes/solicitantes.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { AprobadoresComponent } from './componentes/aprobadores/aprobadores.component';
import { AddSolicitantesComponent } from './componentes/add-solicitantes/add-solicitantes.component';
import { AddAprobadoresComponent } from './componentes/add-aprobadores/add-aprobadores.component';
import { InfoProductosComponent } from './componentes/info-productos/info-productos.component';
import { AddProductosComponent } from './componentes/add-productos/add-productos.component';
import { AddSolucionesVerticalesComponent } from './componentes/add-soluciones-verticales/add-soluciones-verticales.component';
import { InfoSolucionesVerticalesComponent } from './componentes/info-soluciones-verticales/info-soluciones-verticales.component';
import { AddSolicitudComponent } from './componentes/add-solicitud/add-solicitud.component';
import { SolicitudesComponent } from './componentes/solicitudes/solicitudes.component';
import { ADSolicitudesComponent } from './componentes/adsolicitudes/adsolicitudes.component';
import { EstadoSolicitudComponent } from './componentes/estado-solicitud/estado-solicitud.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'clientes', component: ClientesPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'addClientes', component: AddClientesComponent},
  {path: 'infoCliente', component: InfoClienteComponent},
  {path: 'solicitantes', component: SolicitantesComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'aprobadores', component: AprobadoresComponent},
  {path: 'addSolicitantes', component: AddSolicitantesComponent},
  {path: 'addAprobadores', component: AddAprobadoresComponent},
  {path: 'infoProductos', component: InfoProductosComponent},
  {path: 'addProductos', component: AddProductosComponent},
  {path: 'addSolucionesVerticales', component: AddSolucionesVerticalesComponent},
  {path: 'infoSoluciones', component: InfoSolucionesVerticalesComponent},
  {path: 'addSolicitud', component: AddSolicitudComponent},
  {path: 'solicitudes', component: SolicitudesComponent},
  {path: 'adsolicitud', component: ADSolicitudesComponent},
  {path: 'estadoSolicitud', component: EstadoSolicitudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
