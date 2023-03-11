import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCompteUtilisateurComponent } from './gestion-compte-utilisateur.component';

describe('GestionCompteUtilisateurComponent', () => {
  let component: GestionCompteUtilisateurComponent;
  let fixture: ComponentFixture<GestionCompteUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCompteUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCompteUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
