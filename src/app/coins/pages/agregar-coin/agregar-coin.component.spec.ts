import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCoinComponent } from './agregar-coin.component';

describe('AgregarCoinComponent', () => {
  let component: AgregarCoinComponent;
  let fixture: ComponentFixture<AgregarCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
