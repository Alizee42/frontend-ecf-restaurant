import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHoraireJourComponent } from './gestion-horaire-jour.component';

describe('GestionHoraireJourComponent', () => {
  let component: GestionHoraireJourComponent;
  let fixture: ComponentFixture<GestionHoraireJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionHoraireJourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionHoraireJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
