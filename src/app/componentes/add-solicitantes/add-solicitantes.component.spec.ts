import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolicitantesComponent } from './add-solicitantes.component';

describe('AddSolicitantesComponent', () => {
  let component: AddSolicitantesComponent;
  let fixture: ComponentFixture<AddSolicitantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSolicitantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSolicitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
