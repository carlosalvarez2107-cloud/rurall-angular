import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tuberculos } from './tuberculos';

describe('Tuberculos', () => {
  let component: Tuberculos;
  let fixture: ComponentFixture<Tuberculos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tuberculos],
    }).compileComponents();

    fixture = TestBed.createComponent(Tuberculos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
