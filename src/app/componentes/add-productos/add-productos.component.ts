import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.scss']
})
export class AddProductosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verificar(): void{
    if(true){
    this.router.navigate(['/productos'])
  }else{

  }
}

}
