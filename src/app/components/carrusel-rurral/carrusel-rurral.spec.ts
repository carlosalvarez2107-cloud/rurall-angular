import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarruselRurral } from './carrusel-rurral';

describe('CarruselRurral', () => {
  let component: CarruselRurral;
  let fixture: ComponentFixture<CarruselRurral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselRurral],
    }).compileComponents();

    fixture = TestBed.createComponent(CarruselRurral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
