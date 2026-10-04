import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comprador } from './comprador';

describe('Comprador', () => {
  let component: Comprador;
  let fixture: ComponentFixture<Comprador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comprador],
    }).compileComponents();

    fixture = TestBed.createComponent(Comprador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
