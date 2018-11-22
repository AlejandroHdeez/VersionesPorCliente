import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aprobadores',
  templateUrl: './aprobadores.component.html',
  styleUrls: ['./aprobadores.component.scss']
})
export class AprobadoresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/addAprobadores'])
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
