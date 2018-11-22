import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-soluciones-verticales',
  templateUrl: './add-soluciones-verticales.component.html',
  styleUrls: ['./add-soluciones-verticales.component.scss']
})
export class AddSolucionesVerticalesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/infoProductos'])
  }else{
  
  }
  }

}
