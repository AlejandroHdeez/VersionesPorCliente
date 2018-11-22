import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.scss']
})
export class AddClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar2(): void{
    if(true){
    this.router.navigate(['/clientes'])
  }else{

  }
}

}
