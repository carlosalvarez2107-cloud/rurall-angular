import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Granos } from './granos';

describe('Granos', () => {
  let component: Granos;
  let fixture: ComponentFixture<Granos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Granos],
    }).compileComponents();

    fixture = TestBed.createComponent(Granos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
