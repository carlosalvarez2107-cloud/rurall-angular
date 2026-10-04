import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoWidget } from './carrito-widget';

describe('CarritoWidget', () => {
  let component: CarritoWidget;
  let fixture: ComponentFixture<CarritoWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
