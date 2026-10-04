import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Productor } from './productor';

describe('Productor', () => {
  let component: Productor;
  let fixture: ComponentFixture<Productor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productor],
    }).compileComponents();

    fixture = TestBed.createComponent(Productor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
