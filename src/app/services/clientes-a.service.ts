import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ClientesA } from '../models/clientesA';

@Injectable({
  providedIn: 'root'
})
export class ClientesAService {

  clientesAList: AngularFireList <any>;
  selectedClientesA: ClientesA = new ClientesA();
  constructor(private firebase: AngularFireDatabase) { }
  
  getClientes(){
    return this.clientesAList = this.firebase.list('ClientesA')
  }

  insertCliente(name: string, description: string){
    this.clientesAList.push({
      name: name,
      description: description
    });
  }
}
