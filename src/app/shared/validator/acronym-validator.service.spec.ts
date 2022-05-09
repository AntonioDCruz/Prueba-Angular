import { TestBed } from '@angular/core/testing';

import { AcronymValidatorService } from './acronym-validator.service';

describe('AcronymValidatorService', () => {
  let service: AcronymValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcronymValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
