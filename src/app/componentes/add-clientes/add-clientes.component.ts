import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { ClientesService } from '../../services/clientes.service';
import { ToastrService } from 'ngx-toastr';
import { FlashMessagesModule, FlashMessagesService } from "angular2-flash-messages";
import { element } from '@angular/core/src/render3/instructions';
import { Clientes } from 'src/app/models/Clientes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.scss']
})
export class AddClientesComponent implements OnInit {
  clientesList: Clientes[];
  datos = [];
  ref:any = firebase.database().ref('Clientes');
  constructor(private router: Router, private clientesService: ClientesService) {
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

onEdit(cliente: Clientes){
  this.clientesService.selectedClientes = Object.assign({}, cliente);
}

  verificar2(): void{
    if(true){
    this.router.navigate(['/clientes'])
  }else{

  }
}

resetForm(clienteForm?: NgForm){
  if(clienteForm != null){
    clienteForm.reset();
    this.clientesService.selectedClientes = new Clientes();
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
