import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado-solicitud',
  templateUrl: './estado-solicitud.component.html',
  styleUrls: ['./estado-solicitud.component.scss']
})
export class EstadoSolicitudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar1(): void{
    if(true){
    this.router.navigate(['/solicitudes'])
  }else{
  
  }
  }

}
