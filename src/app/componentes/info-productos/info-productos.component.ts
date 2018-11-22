import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-productos',
  templateUrl: './info-productos.component.html',
  styleUrls: ['./info-productos.component.scss']
})
export class InfoProductosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/addSolucionesVerticales'])
  }else{
  
  }
  }

  verificar2(): void{
    if(true){
    this.router.navigate(['/productos'])
  }else{
  
  }
  }

  verificar3(): void{
    if(true){
    this.router.navigate(['/infoSoluciones'])
  }else{
  
  }
  }

}
