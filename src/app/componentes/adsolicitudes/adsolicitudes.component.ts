import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adsolicitudes',
  templateUrl: './adsolicitudes.component.html',
  styleUrls: ['./adsolicitudes.component.scss']
})
export class ADSolicitudesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/solicitudes'])
  }else{
  
  }
  }

}
