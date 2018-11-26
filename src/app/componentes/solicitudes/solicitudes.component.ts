import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/adsolicitud'])
  }else{
  
  }
  }

}
