import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerdurasYHortalizas } from './verduras-y-hortalizas';

describe('VerdurasYHortalizas', () => {
  let component: VerdurasYHortalizas;
  let fixture: ComponentFixture<VerdurasYHortalizas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdurasYHortalizas],
    }).compileComponents();

    fixture = TestBed.createComponent(VerdurasYHortalizas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
