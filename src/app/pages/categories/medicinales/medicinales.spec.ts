import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Medicinales } from './medicinales';

describe('Medicinales', () => {
  let component: Medicinales;
  let fixture: ComponentFixture<Medicinales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medicinales],
    }).compileComponents();

    fixture = TestBed.createComponent(Medicinales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
