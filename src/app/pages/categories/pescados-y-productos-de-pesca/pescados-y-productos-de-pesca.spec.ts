import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PescadosYProductosDePesca } from './pescados-y-productos-de-pesca';

describe('Pescados-y-productos-de-pesca', () => {
  let component: PescadosYProductosDePesca;
  let fixture: ComponentFixture<PescadosYProductosDePesca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PescadosYProductosDePesca],
    }).compileComponents();

    fixture = TestBed.createComponent(PescadosYProductosDePesca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
