import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLineComponent } from './agregar-line.component';

describe('AgregarLineComponent', () => {
  let component: AgregarLineComponent;
  let fixture: ComponentFixture<AgregarLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
