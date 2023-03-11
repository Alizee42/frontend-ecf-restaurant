import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFormuleComponent } from './gestion-formule.component';

describe('GestionFormuleComponent', () => {
  let component: GestionFormuleComponent;
  let fixture: ComponentFixture<GestionFormuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionFormuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionFormuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
