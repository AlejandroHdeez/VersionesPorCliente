import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADSolicitudesComponent } from './adsolicitudes.component';

describe('ADSolicitudesComponent', () => {
  let component: ADSolicitudesComponent;
  let fixture: ComponentFixture<ADSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
