import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-aprobadores',
  templateUrl: './add-aprobadores.component.html',
  styleUrls: ['./add-aprobadores.component.scss']
})
export class AddAprobadoresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/aprobadores'])
  }else{

  }
}

}
