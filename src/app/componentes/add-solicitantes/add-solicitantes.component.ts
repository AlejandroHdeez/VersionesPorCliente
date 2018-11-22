import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-solicitantes',
  templateUrl: './add-solicitantes.component.html',
  styleUrls: ['./add-solicitantes.component.scss']
})
export class AddSolicitantesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/solicitantes'])
  }else{
  
  }
  }

}
