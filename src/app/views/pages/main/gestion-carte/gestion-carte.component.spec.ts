import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCarteComponent } from './gestion-carte.component';

describe('GestionCarteComponent', () => {
  let component: GestionCarteComponent;
  let fixture: ComponentFixture<GestionCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCarteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
