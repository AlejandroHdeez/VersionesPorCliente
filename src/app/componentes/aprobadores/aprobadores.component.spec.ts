import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobadoresComponent } from './aprobadores.component';

describe('AprobadoresComponent', () => {
  let component: AprobadoresComponent;
  let fixture: ComponentFixture<AprobadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
