import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Clientes } from '../models/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientesList: AngularFireList <any>;
  selectedClientes: Clientes = new Clientes();
  constructor(private firebase: AngularFireDatabase) { }
  
  getClientes(){
    return this.clientesList = this.firebase.list('Clientes')
  }
}
