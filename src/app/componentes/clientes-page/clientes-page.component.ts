import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-page',
  templateUrl: './clientes-page.component.html',
  styleUrls: ['./clientes-page.component.scss']
})
export class ClientesPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
