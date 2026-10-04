import { TestBed } from '@angular/core/testing';
import { RegistroWizardService } from './registro-wizard';

describe('RegistroWizard', () => {
  let service: RegistroWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
