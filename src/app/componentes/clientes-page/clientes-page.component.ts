import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientesAService } from 'src/app/services/clientes-a.service';
import { ClientesA } from 'src/app/models/ClientesA';

import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes-page',
  templateUrl: './clientes-page.component.html',
  styleUrls: ['./clientes-page.component.scss']
})
export class ClientesPageComponent implements OnInit {
  datos: ClientesA[];

  constructor(private router: Router, private clienteAService: ClientesAService) { }

  ngOnInit() {
    this.clienteAService.getClientes()
    .snapshotChanges()
    .subscribe(item =>{
      this.datos = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.datos.push(x as ClientesA);
      })
    })
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/addClientes'])
  }else{

  }
}

verificar3(): void{
  if(true){
  this.router.navigate(['/infoCliente'])
}else{

}
}

}
