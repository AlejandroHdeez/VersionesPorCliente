import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styleUrls: ['./info-cliente.component.scss']
})
export class InfoClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/solicitantes'])
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
    this.router.navigate(['/aprobadores'])
  }else{
  
  }
  }
}
