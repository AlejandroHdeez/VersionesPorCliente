import { TestBed } from '@angular/core/testing';

import { ClinService } from './clin.service';

describe('ClinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinService = TestBed.get(ClinService);
    expect(service).toBeTruthy();
  });
});
