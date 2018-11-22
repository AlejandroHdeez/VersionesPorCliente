import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-soluciones-verticales',
  templateUrl: './info-soluciones-verticales.component.html',
  styleUrls: ['./info-soluciones-verticales.component.scss']
})
export class InfoSolucionesVerticalesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/addSolicitud'])
  }else{
  
  }
  }

  verificar2(): void{
    if(true){
    this.router.navigate(['/infoProductos'])
  }else{
  
  }
  }

}
