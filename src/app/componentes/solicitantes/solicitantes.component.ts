import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.scss']
})
export class SolicitantesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/addSolicitantes'])
  }else{
  
  }
  }

  verificar2(): void{
    if(true){
    this.router.navigate(['/infoCliente'])
  }else{
  
  }
  }

}
