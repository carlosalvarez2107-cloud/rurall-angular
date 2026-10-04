import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Logistica } from './logistica';

describe('Logistica', () => {
  let component: Logistica;
  let fixture: ComponentFixture<Logistica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logistica],
    }).compileComponents();

    fixture = TestBed.createComponent(Logistica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
