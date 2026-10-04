import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carnes } from './carnes';

describe('Carnes', () => {
  let component: Carnes;
  let fixture: ComponentFixture<Carnes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carnes],
    }).compileComponents();

    fixture = TestBed.createComponent(Carnes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
