import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAndMenuComponent } from './card-and-menu.component';

describe('CardAndMenuComponent', () => {
  let component: CardAndMenuComponent;
  let fixture: ComponentFixture<CardAndMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAndMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAndMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
