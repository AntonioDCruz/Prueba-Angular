import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPortfolioComponent } from './agregar-portfolio.component';

describe('AgregarPortfolioComponent', () => {
  let component: AgregarPortfolioComponent;
  let fixture: ComponentFixture<AgregarPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
