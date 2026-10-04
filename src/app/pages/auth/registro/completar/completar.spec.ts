import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Completar } from './completar';

describe('Completar', () => {
  let component: Completar;
  let fixture: ComponentFixture<Completar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Completar],
    }).compileComponents();

    fixture = TestBed.createComponent(Completar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
