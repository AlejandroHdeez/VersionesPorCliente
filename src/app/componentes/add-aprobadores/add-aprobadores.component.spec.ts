import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAprobadoresComponent } from './add-aprobadores.component';

describe('AddAprobadoresComponent', () => {
  let component: AddAprobadoresComponent;
  let fixture: ComponentFixture<AddAprobadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAprobadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAprobadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
