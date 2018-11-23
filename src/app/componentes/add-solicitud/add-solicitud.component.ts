import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-solicitud',
  templateUrl: './add-solicitud.component.html',
  styleUrls: ['./add-solicitud.component.scss']
})
export class AddSolicitudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/solicitudes'])
  }else{
  
  }
  }

  verificar2(): void{
    if(true){
    this.router.navigate(['/infoSoluciones'])
  }else{
  
  }
  }

}
