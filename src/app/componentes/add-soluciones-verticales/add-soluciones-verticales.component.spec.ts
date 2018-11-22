import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolucionesVerticalesComponent } from './add-soluciones-verticales.component';

describe('AddSolucionesVerticalesComponent', () => {
  let component: AddSolucionesVerticalesComponent;
  let fixture: ComponentFixture<AddSolucionesVerticalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSolucionesVerticalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSolucionesVerticalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
