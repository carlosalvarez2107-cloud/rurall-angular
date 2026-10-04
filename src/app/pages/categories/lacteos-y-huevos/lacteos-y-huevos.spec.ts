import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LacteosYHuevos } from './lacteos-y-huevos';

describe('LacteosYHuevos', () => {
  let component: LacteosYHuevos;
  let fixture: ComponentFixture<LacteosYHuevos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LacteosYHuevos],
    }).compileComponents();

    fixture = TestBed.createComponent(LacteosYHuevos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
