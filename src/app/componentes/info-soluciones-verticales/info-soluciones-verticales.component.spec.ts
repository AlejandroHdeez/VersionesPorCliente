import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSolucionesVerticalesComponent } from './info-soluciones-verticales.component';

describe('InfoSolucionesVerticalesComponent', () => {
  let component: InfoSolucionesVerticalesComponent;
  let fixture: ComponentFixture<InfoSolucionesVerticalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSolucionesVerticalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSolucionesVerticalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
