import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPanierComponent } from './main-panier.component';

describe('MainPanierComponent', () => {
  let component: MainPanierComponent;
  let fixture: ComponentFixture<MainPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
