import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/addProductos'])
  }else{
  
  }
  }

  verificar2(): void{
    if(true){
    this.router.navigate(['/infoCliente'])
  }else{
  
  }
  }

  verificar3(): void{
    if(true){
    this.router.navigate(['/infoProductos'])
  }else{
  
  }
  }

}
