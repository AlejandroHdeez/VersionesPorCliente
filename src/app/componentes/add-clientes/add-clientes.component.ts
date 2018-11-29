import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { ClientesService } from '../../services/clientes.service';
import { Clientes } from 'src/app/models/Clientes';
import { NgForm } from '@angular/forms';
import { ClientesAService } from 'src/app/services/clientes-a.service';
import { ClientesA } from 'src/app/models/ClientesA';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.scss']
})
export class AddClientesComponent implements OnInit {
  clientesList: Clientes[];
  datos = [];
  d:string;
  ref:any = firebase.database().ref('Clientes');
  ref2:any = firebase.database().ref('ClientesA');
  constructor(private router: Router, private clientesService: ClientesService, private clientesAService: ClientesAService) {
    let newDato = this.ref.push();
    //newDato.set({
      //name: "BANTRAB",
      //description: "Los servicios Bantrab incluyen la asesoría y acompañamiento personalizado para que los clientes queden satisfechos."
    //})
    console.log(this.datos);
  }

  ngOnInit() {
    this.clientesService.getClientes()
      .snapshotChanges()
        .subscribe(item =>{
          this.datos = [];
          item.forEach(element =>{
            let x = element.payload.toJSON();
            x["$key"] = element.key;
            this.datos.push(x as Clientes);
        });
        });       
        this.ref.on('value', resp=>{
          this.datos = [];
          this.datos = firebaseToArray(resp);
        })
}

onSubmit(clientesForm: NgForm){
  this.clientesAService.insertCliente(
    this.clientesService.selectedClientes.name,
    this.clientesService.selectedClientes.description
  );
  /*if(clientesForm.value.$key == null){
    
  }else{

  }*/
}

onEdit(clientes: Clientes){
  this.clientesAService.selectedClientesA = Object.assign({}, clientes);
  /*this.clientesAService.insertCliente(
    name,
    description
  );*/
}

  verificar2(name:any, description:string){
    if(true){
    this.router.navigate(['/clientes'])

    let newClient = this.ref2.push();
    newClient.set({
      name: name,
      description: description
    })
  }else{

  }
}

resetForm(clienteForm?: NgForm){
  if(clienteForm != null){
    clienteForm.reset();
    this.clientesService.selectedClientes = new ClientesA();
  }
}

}

export const firebaseToArray = snapshot => {
  let returns = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returns.push(item);
});

return returns;

}
