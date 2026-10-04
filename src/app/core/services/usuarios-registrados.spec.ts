import { TestBed } from '@angular/core/testing';
import { UsuariosRegistrados } from './usuarios-registrados';

describe('UsuariosRegistrados', () => {
  let service: UsuariosRegistrados;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosRegistrados);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
